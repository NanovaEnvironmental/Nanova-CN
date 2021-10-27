import { NgModule } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";

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
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ]
})
export class CompanyModule { }