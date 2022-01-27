import { Component, OnInit } from '@angular/core';
import { SUPPORT_BG } from 'src/app/constants';

@Component({
  selector: 'app-tech-support',
  templateUrl: './tech-support.component.html',
  styleUrls: ['./tech-support.component.scss']
})
export class TechSupportComponent implements OnInit {
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
