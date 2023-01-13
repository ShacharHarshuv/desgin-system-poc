import {
  Component,
  Input,
  Injector,
  ViewChild,
  TemplateRef,
  AfterViewInit,
} from '@angular/core';
import { BaseDesignSystemComponent } from '../design-system-component/base-design-system.component';

@Component({
  selector: 'lib-button',
  template:`
  `,
  styles: [`
    :host {
        display: none;
    }
  `],
})
export class ButtonComponent extends BaseDesignSystemComponent<'button'> implements AfterViewInit {
  component: 'button' = 'button';

  @Input()
  type: 'primary' | 'secondary' = 'secondary';

  @Input()
  content: string = '';

  constructor(injector: Injector) {
    super(injector);
  }

}
