import { Component, OnInit } from '@angular/core';
import { REQUEST_INFO_BG } from 'src/app/constants';

@Component({
  selector: 'app-request-more-info',
  templateUrl: './request-more-info.component.html',
  styleUrls: ['../contact.component.scss']
})
export class RequestMoreInfoComponent implements OnInit {
  bgImg = REQUEST_INFO_BG;

  constructor() { }

  ngOnInit(): void {
  }

}
