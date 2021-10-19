import { NgModule } from "@angular/core";

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionFormComponent } from './question-form/question-form.component';

const sharedComponents = [
    NavbarComponent,
    FooterComponent,
    QuestionFormComponent
];

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
  ],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }