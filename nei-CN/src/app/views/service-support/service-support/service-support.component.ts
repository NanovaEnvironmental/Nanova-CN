import { Component, OnInit } from '@angular/core';
import { SUPPORT_BG } from 'src/app/constants';

@Component({
  selector: 'app-service-support',
  templateUrl: './service-support.component.html',
  styleUrls: ['./service-support.component.scss']
})
export class ServiceSupportComponent implements OnInit {
  bgImg = SUPPORT_BG;

  constructor() { }

  ngOnInit(): void {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

}
