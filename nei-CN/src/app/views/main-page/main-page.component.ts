import { Component, OnInit } from '@angular/core';
import { COMPACKT_GC, EVENTS, HOME_BG, MAIN_BG_IMG, ONLINE_MONITORING, P100_BG, SENSORS } from 'src/app/constants';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  homeImg1 = MAIN_BG_IMG;
  homeImg2 = P100_BG;
  homeImg3 = HOME_BG;
  gcImg = COMPACKT_GC;
  omImg = ONLINE_MONITORING;
  sensorsImg = SENSORS;
  events = EVENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
