import { NgModule } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from "src/app/material.module";

import { ServiceSupportComponent } from './service-support/service-support.component';
import { TechSupportComponent } from './tech-support/tech-support.component';

@NgModule({
  declarations: [
    ServiceSupportComponent,
    TechSupportComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule
  ]
})
export class ServiceSupportModule { }