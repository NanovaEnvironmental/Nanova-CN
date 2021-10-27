import { Component, OnInit } from '@angular/core';
import { JOIN_US_BG } from 'src/app/constants';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['../company.component.scss']
})
export class JoinUsComponent implements OnInit {
  bgImg = JOIN_US_BG;

  constructor() { }

  ngOnInit(): void {
  }

}
