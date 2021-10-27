import { Component, OnInit } from '@angular/core';
import { BUSI_PART_BG, DUVAS_IMG, SATIR_IMG, SCENTR_IMG } from 'src/app/constants';
import { Partner } from './partner.module';

@Component({
  selector: 'app-business-partners',
  templateUrl: './business-partners.component.html',
  styleUrls: ['../company.component.scss']
})
export class BusinessPartnersComponent implements OnInit {
  bgImg = BUSI_PART_BG;
  duvasLogo = DUVAS_IMG;
  scentLogo = SCENTR_IMG;
  satirLogo = SATIR_IMG;
  partners: Partner[] = [
    new Partner('src/app/assets/Duvas-Logo.png', 'this is a test')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
