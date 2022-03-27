import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { MaterialModule } from "../material.module";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { EventsComponent } from './events/events.component';
import { ExploreMoreComponent } from './explore-more/explore-more.component';
import { NavContentComponent } from './nav-content/nav-content.component';

const sharedComponents = [
    NavbarComponent,
    FooterComponent,
    QuestionFormComponent,
    EventsComponent,
    ExploreMoreComponent
];

@NgModule({
  declarations: [
    ...sharedComponents,
    NavContentComponent,
  ],
  imports: [
    MaterialModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }