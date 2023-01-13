import {
  AfterViewInit,
  ViewContainerRef,
  OnChanges,
  SimpleChanges,
  Injector,
  Injectable,
} from '@angular/core';
import {
  DesignSystemComponentsInputs,
  DESIGN_SYSTEM_COMPONENTS,
  DesignSystemComponents,
} from '../design-system';
import { BehaviorSubject } from 'rxjs';
import { mapValues } from 'lodash';

@Injectable()
export abstract class BaseDesignSystemComponent<G extends keyof DesignSystemComponentsInputs> implements AfterViewInit, OnChanges {
  private readonly _inputs$ = new BehaviorSubject<Partial<DesignSystemComponentsInputs[G]>>({});
  private _container: ViewContainerRef = this._injector.get(ViewContainerRef);
  private _designSystemComponent: DesignSystemComponents = this._injector.get(DESIGN_SYSTEM_COMPONENTS);

  abstract component: G;

  protected constructor(
    private _injector: Injector,
  ) {
  }

  ngAfterViewInit(): void {
    const componentRef = this._container.createComponent<DesignSystemComponentsInputs[G]>(this._designSystemComponent[this.component]);

    this._inputs$
      .subscribe((inputs) => {
        for (let input in inputs) {
          const value = inputs[input];
          if (value !== undefined) {
            componentRef.instance[input] = value!;
          }
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._inputs$.next(mapValues(changes, change => change.currentValue) as DesignSystemComponentsInputs[G]);
  }
}
