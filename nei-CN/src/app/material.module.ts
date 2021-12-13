import { NgModule } from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';


const materialModules = [
    MatFormFieldModule, 
    MatInputModule, 
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule
]
@NgModule({
    imports: [
        ...materialModules
    ],
    exports: [
        ...materialModules
    ]
})
export class MaterialModule {}