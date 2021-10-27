import { Component, OnInit } from '@angular/core';
import { BUSI_PART_BG } from 'src/app/constants';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['../company.component.scss']
})
export class DistributorsComponent implements OnInit {
  bgImg = BUSI_PART_BG;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
