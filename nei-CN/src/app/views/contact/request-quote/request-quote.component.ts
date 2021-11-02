import { Component, OnInit } from '@angular/core';
import { REQUEST_QUOTE_BG } from 'src/app/constants';

@Component({
  selector: 'app-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['../contact.component.scss']
})
export class RequestQuoteComponent implements OnInit {
  bgImg = REQUEST_QUOTE_BG;

  constructor() { }

  ngOnInit(): void {
  }

}
