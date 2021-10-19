import { NgModule } from "@angular/core";
import { AboutUsComponent } from './about-us/about-us.component';
import { BusinessPartnersComponent } from './business-partners/business-partners.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { JoinUsComponent } from './join-us/join-us.component';

@NgModule({
    

  declarations: [
    AboutUsComponent,
    BusinessPartnersComponent,
    DistributorsComponent,
    JoinUsComponent
  ]
})
export class CompanyModule { }