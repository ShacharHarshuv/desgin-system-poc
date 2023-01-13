import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'lib-shared',
  template: `
    <p>This is a shared component, which uses design system elements provided by the app</p>
    <lib-button content="Button"></lib-button>
    <p>We can pass inputs to customize:</p>
    <lib-button type="primary" content="Primary Button"></lib-button>
  `,
  styles: [
    `
      :host {
          display: block;
      }
    `
  ]
})
export class SharedComponent implements AfterViewInit {

  @ViewChild('buttonContainer', {read: ViewContainerRef, static: true})
  container: ViewContainerRef | null = null;

  constructor(
  ) {
  }

  ngAfterViewInit() {

  }
}
