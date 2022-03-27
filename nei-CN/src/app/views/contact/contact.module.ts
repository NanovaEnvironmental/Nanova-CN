import { NgModule } from "@angular/core";
import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "src/app/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    RequestQuoteComponent,
    ContactUsComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactModule { }