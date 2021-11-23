import { NgModule } from "@angular/core";
import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "src/app/material.module";

@NgModule({
  declarations: [
    RequestQuoteComponent,
    ContactUsComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule
  ]
})
export class ContactModule { }