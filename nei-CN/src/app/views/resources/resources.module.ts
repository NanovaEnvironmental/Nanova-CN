import { NgModule } from "@angular/core";
import { GasChromatographyRsrcComponent } from './gas-chromatography-rsrc/gas-chromatography-rsrc.component';
import { SpectroscopyRsrcComponent } from './spectroscopy-rsrc/spectroscopy-rsrc.component';
import { SensorTechComponent } from './technologies/sensor-tech/sensor-tech.component';

@NgModule({
    

  declarations: [
    GasChromatographyRsrcComponent,
    SpectroscopyRsrcComponent,
    SensorTechComponent
  ]
})
export class ResourcesModule { }