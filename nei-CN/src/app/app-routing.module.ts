import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './views/main-page/main-page.component';
import { ServiceSupportComponent } from './views/service-support/service-support/service-support.component';
import { TechSupportComponent } from './views/service-support/tech-support/tech-support.component';

const routes: Routes = [
  { path:'', component: MainPageComponent },
  { path:'service-supports', component: ServiceSupportComponent},
  { path:'tech-supports', component: TechSupportComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
