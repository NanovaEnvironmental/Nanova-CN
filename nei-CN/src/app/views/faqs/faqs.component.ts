import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
import { A1000_QUESTIONS, P100_QUESTIONS, P300_QUESTIONS, SUPPORT_BG } from 'src/app/constants';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  bgImg = SUPPORT_BG;
  product: any;
  productName: any;
  questionGroup: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.route.paramMap.subscribe(params => {
      this.product = params.get("product");

      if(this.product === "p100") {
        this.questionGroup = P100_QUESTIONS;
        this.productName = "NOVATEST P100";
      } else if (this.product === "p300") {
        this.questionGroup = P300_QUESTIONS;
        this.productName = "NOVATEST P300"
      } else if (this.product === "a1000") {
        this.questionGroup = A1000_QUESTIONS;
        this.productName = "NOVATEST A1000"
      }
    });  
  }
}
