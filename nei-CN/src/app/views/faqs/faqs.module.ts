import { NgModule } from "@angular/core";
import { FaqsP100Component } from './faqs-p100/faqs-p100.component';
import { FaqsP300Component } from './faqs-p300/faqs-p300.component';
import { FaqsA1000Component } from './faqs-a1000/faqs-a1000.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "src/app/material.module";

@NgModule({
  declarations: [
    FaqsP100Component,
    FaqsP300Component,
    FaqsA1000Component
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule
  ]
})
export class FAQsModule { }