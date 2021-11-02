import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { ProductsComponent } from './views/products/products.component';
import { ApplicationsComponent } from './views/applications/applications.component';
// import { ServiceSupportComponent } from './views/service-support/service-support/service-support.component';
import { NewsAndEventsComponent } from './views/news-and-events/news-and-events.component';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { CompanyModule } from './views/company/company.module';
import { ServiceSupportModule } from './views/service-support/service-support.module';
import { ContactModule } from './views/contact/contact.module';
import { FAQsModule } from './views/faqs/faqs.module';
import { FaqsComponent } from './views/faqs/faqs.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductsComponent,
    ApplicationsComponent,
    // ServiceSupportComponent,
    NewsAndEventsComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule, //need to be modified
    RouterModule,
    CompanyModule,
    ServiceSupportModule,
    ContactModule,
    FormsModule,
    FAQsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
