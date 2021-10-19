import { NgModule } from "@angular/core";
import { Novatestp100Component } from './gas-chromatography/novatestp100/novatestp100.component';
import { Novatestp300Component } from './gas-chromatography/novatestp300/novatestp300.component';
import { Novatestw100Component } from './gas-chromatography/novatestw100/novatestw100.component';
import { Dv3000monitorComponent } from './spectroscopy/dv3000monitor/dv3000monitor.component';
import { PandairComponent } from './ir-detection/pandair/pandair.component';
import { HotfindSirComponent } from './ir-detection/hotfind-sir/hotfind-sir.component';
import { SatirvseriesComponent } from './ir-detection/satirvseries/satirvseries.component';
import { GasSamplingBagsComponent } from './gas-sampling/gas-sampling-bags/gas-sampling-bags.component';

@NgModule ({
    

  declarations: [
    Novatestp100Component,
    Novatestp300Component,
    Novatestw100Component,
    Dv3000monitorComponent,
    PandairComponent,
    HotfindSirComponent,
    SatirvseriesComponent,
    GasSamplingBagsComponent
  ]
})
export class ProductsModule {}