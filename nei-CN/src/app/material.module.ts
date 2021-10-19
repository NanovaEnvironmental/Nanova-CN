import { NgModule } from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
    imports: [
        MatFormFieldModule, 
        MatInputModule, 
        MatSliderModule
    ],
    exports: [
        MatFormFieldModule, 
        MatInputModule, 
        MatSliderModule
    ]
})
export class MaterialModule {}