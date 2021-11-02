import { Component, OnInit } from '@angular/core';
import { SUPPORT_BG } from 'src/app/constants';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  bgImg = SUPPORT_BG;

  constructor() { }

  ngOnInit(): void {
  }

}
