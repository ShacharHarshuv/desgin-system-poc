import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from '../../projects/shared/src/lib/shared.module';
import { ButtonComponent } from './design-system-component/button/button.component';
import { ProjectDesignSystem } from './project-design-system';
import { DESIGN_SYSTEM_COMPONENTS } from '../../projects/shared/src/lib/design-system/design-system';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
  ],
  providers: [
    {
      provide: DESIGN_SYSTEM_COMPONENTS,
      useClass: ProjectDesignSystem,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
