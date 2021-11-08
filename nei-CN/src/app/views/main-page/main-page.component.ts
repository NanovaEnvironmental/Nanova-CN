import { Component, OnInit } from '@angular/core';
import { COMPACKT_GC, EVENTS, MAIN_BG_IMG, ONLINE_MONITORING, SENSORS } from 'src/app/constants';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  bgImg = MAIN_BG_IMG;
  gcImg = COMPACKT_GC;
  omImg = ONLINE_MONITORING;
  sensorsImg = SENSORS;
  events = EVENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
