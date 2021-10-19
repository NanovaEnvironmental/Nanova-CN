import { NgModule } from "@angular/core";

// import { SharedModule } from "../../shared/shared.module";
import { MainPageComponent } from "./main-page.component";

@NgModule({
    declarations: [MainPageComponent],
    imports: [
        // SharedModule
    ],
    exports: [ MainPageComponent ]
 })
export class MainPageModule{ }