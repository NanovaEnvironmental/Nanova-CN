import { Component, OnInit } from '@angular/core';
import { COMPACKT_GC, EVENTS, HOME_BG, MAIN_BG_IMG, ONLINE_MONITORING, P100_BG, SENSORS } from 'src/app/constants';
import {trigger, style, animate, transition} from '@angular/animations';

const fadeInOne = trigger('fadeOne', [ 
  transition('void => *', [
    style({ opacity: 0 }), 
    animate(1000, style({opacity: 1}))
  ]) 
])

const fadeInTwo = trigger('fadeTwo', [ 
  transition('void => *', [
    style({ opacity: 0 }), 
    animate(2000, style({opacity: 1}))
  ]) 
])



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    fadeInOne,
    fadeInTwo
  ]
})
export class MainPageComponent implements OnInit {
  homeImg1 = HOME_BG;
  homeImg2 = P100_BG;
  homeImg3 = MAIN_BG_IMG;
  gcImg = COMPACKT_GC;
  omImg = ONLINE_MONITORING;
  sensorsImg = SENSORS;
  events = EVENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
