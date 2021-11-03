import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './views/company/about-us/about-us.component';
import { BusinessPartnersComponent } from './views/company/business-partners/business-partners.component';
import { DistributorsComponent } from './views/company/distributors/distributors.component';
import { JoinUsComponent } from './views/company/join-us/join-us.component';
import { ContactUsComponent } from './views/contact/contact-us/contact-us.component';
import { RequestMoreInfoComponent } from './views/contact/request-more-info/request-more-info.component';
import { RequestQuoteComponent } from './views/contact/request-quote/request-quote.component';
import { FaqsComponent } from './views/faqs/faqs.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { NewsAndEventsComponent } from './views/news-and-events/news-and-events.component';
import { ServiceSupportComponent } from './views/service-support/service-support/service-support.component';
import { TechSupportComponent } from './views/service-support/tech-support/tech-support.component';

const routes: Routes = [
  { path:'', component: MainPageComponent },
  { path:'service-supports', component: ServiceSupportComponent },
  { path:'tech-supports', component: TechSupportComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'business-partners', component: BusinessPartnersComponent },
  { path: 'our-distributors', component: DistributorsComponent },
  { path: 'open-positions', component: JoinUsComponent },
  { path: 'request-more-info', component: RequestMoreInfoComponent },
  { path: 'request-quote', component: RequestQuoteComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'news-and-events', component: NewsAndEventsComponent},
  { path: 'faqs/:product', component: FaqsComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
