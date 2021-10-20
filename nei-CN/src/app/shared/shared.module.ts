import { NgModule } from "@angular/core";

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { MaterialModule } from "../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

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
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }