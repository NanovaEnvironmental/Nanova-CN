import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { MaterialModule } from "../material.module";
import { EventsComponent } from './events/events.component';

const sharedComponents = [
    NavbarComponent,
    FooterComponent,
    QuestionFormComponent,
    EventsComponent
];

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }