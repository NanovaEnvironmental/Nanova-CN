import { Component, OnInit } from '@angular/core';
import { LOGO_IMG, TEL } from 'src/app/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navImage = LOGO_IMG;
  tel = TEL;
  
  constructor() { }

  ngOnInit(): void {
  }

}
