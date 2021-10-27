import { Component, OnInit } from '@angular/core';
import { ABOUT_US_BG } from 'src/app/constants';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['../company.component.scss']
})
export class AboutUsComponent implements OnInit {
  bgImg = ABOUT_US_BG;

  constructor() { }

  ngOnInit(): void {
  }

}
