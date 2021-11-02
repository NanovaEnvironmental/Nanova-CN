import { Component, OnInit } from '@angular/core';
import { CONTACT_BG } from 'src/app/constants';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['../contact.component.scss']
})
export class ContactUsComponent implements OnInit {
  bgImg = CONTACT_BG;

  constructor() { }

  ngOnInit(): void {
  }

}
