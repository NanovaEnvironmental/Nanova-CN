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
  }

}
