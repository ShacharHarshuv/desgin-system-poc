import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { ButtonComponent } from './design-system/components/button.component';

@NgModule({
  declarations: [
    SharedComponent,
    ButtonComponent,
  ],
  imports: [],
  exports: [
    SharedComponent,
  ],
})
export class SharedModule {
}
