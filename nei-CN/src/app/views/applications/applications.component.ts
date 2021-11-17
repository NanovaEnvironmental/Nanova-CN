import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AMBIENT_AIR_MONITORING, AUTO_MAT_EMMISION, BREATH_RESEARCH, FENCELINE_MONITORING, INDOOR_AIR_QUALITY, LABORATORY_RESEARCH, LANDFILL_N_BIOGAS, LEAK_DETECTION, OCCUPATIONAL_HEALTH_SAFETY, ODOR, PETROCHEMICAL, PHARMACEUTICAL_PRODUCTION, VEHICLE_EMISSIONS, VEH_INDDOR, VOCS_IN_WATER } from 'src/app/constants';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  application: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const app = params.get("app"); 
      if (app === 'auto-material') {
        this.application = AUTO_MAT_EMMISION;
      } else if (app === 'leak-detection') {
        this.application = LEAK_DETECTION;
      } else if (app === 'vehicle-emission') {
        this.application = VEHICLE_EMISSIONS;
      } else if (app === 'vehicle-indoor-air-quality') {
        this.application = VEH_INDDOR;
      } else if (app === 'fenceline-monitoring') {
        this.application = FENCELINE_MONITORING;
      } else if (app === 'petrochemical') {
        this.application = PETROCHEMICAL;
      } else if (app === 'ambient-air-monitoring') {
        this.application = AMBIENT_AIR_MONITORING;
      } else if (app === 'landfill-and-biogas') {
        this.application = LANDFILL_N_BIOGAS;
      } else if (app === 'odor') {
        this.application = ODOR;
      } else if (app === 'vocs-in-water') {
        this.application = VOCS_IN_WATER;
      } else if (app === 'indoor-air') {
        this.application = INDOOR_AIR_QUALITY;
      } else if (app === 'occupational-safety') {
        this.application = OCCUPATIONAL_HEALTH_SAFETY;
      } else if (app === 'pharmaceutical-production-and-processing') {
        this.application = PHARMACEUTICAL_PRODUCTION;
      } else if (app === 'breath-research') {
        this.application = BREATH_RESEARCH;
      } else if (app === 'laboratory-and-research') {
        this.application = LABORATORY_RESEARCH;
      } 
    })
  }
}
