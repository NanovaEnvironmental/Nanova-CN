import { NgModule } from "@angular/core";
import { AutoMatEmissionsComponent } from './automotive/auto-mat-emissions/auto-mat-emissions.component';
import { LeakDetectionComponent } from './automotive/leak-detection/leak-detection.component';
import { VehicleEmissionsComponent } from './automotive/vehicle-emissions/vehicle-emissions.component';
import { VehicleIndoorAirQualityComponent } from './automotive/vehicle-indoor-air-quality/vehicle-indoor-air-quality.component';
import { FencelineMonitoringComponent } from './energy/fenceline-monitoring/fenceline-monitoring.component';
import { PetrochemicalComponent } from './energy/petrochemical/petrochemical.component';
import { AmbientAirMonitoringComponent } from './environmental/ambient-air-monitoring/ambient-air-monitoring.component';
import { LandfillAndBiogasComponent } from './environmental/landfill-and-biogas/landfill-and-biogas.component';
import { OdorComponent } from './environmental/odor/odor.component';
import { VocsInWaterComponent } from './environmental/vocs-in-water/vocs-in-water.component';
import { IndoorAirQualityComponent } from './indoor/indoor-air-quality/indoor-air-quality.component';
import { OccupationalSafetyComponent } from './indoor/occupational-safety/occupational-safety.component';
import { PharmaProdAndProcComponent } from './pharmaceutical/pharma-prod-and-proc/pharma-prod-and-proc.component';
import { BreathResearchComponent } from './research-and-education/breath-research/breath-research.component';
import { LaboratoryResearchComponent } from './research-and-education/laboratory-research/laboratory-research.component';

@NgModule({
    
  declarations: [
    AutoMatEmissionsComponent,
    LeakDetectionComponent,
    VehicleEmissionsComponent,
    VehicleIndoorAirQualityComponent,
    FencelineMonitoringComponent,
    PetrochemicalComponent,
    AmbientAirMonitoringComponent,
    LandfillAndBiogasComponent,
    OdorComponent,
    VocsInWaterComponent,
    IndoorAirQualityComponent,
    OccupationalSafetyComponent,
    PharmaProdAndProcComponent,
    BreathResearchComponent,
    LaboratoryResearchComponent
  ]
})
export class ApplicationsModule { }