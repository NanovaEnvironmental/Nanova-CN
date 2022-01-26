import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GAS_SAMPLE_BG, PRODUCT_DV3000, PRODUCT_GAS_SAMPLING_BAGS, PRODUCT_HOTFIND, PRODUCT_P100, PRODUCT_P300, PRODUCT_PANDA, PRODUCT_SATIR2, PRODUCT_W1000, TEDLAR_BAG_IMG } from 'src/app/constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product: any;
  gasSamplePage = false;
  productPage = false;
  bgImg = GAS_SAMPLE_BG;
  apiLoaded = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productName = params.get("product");
      if (productName === "gas-sampling-bags") {
        this.gasSamplePage = true;
        this.productPage = false;
        this.product = PRODUCT_GAS_SAMPLING_BAGS;
      } else {
        this.gasSamplePage = false;
        this.productPage = true;
        if (productName === "novatestp100") {
          this.product = PRODUCT_P100;
        } else if (productName === "novatestp300") {
          this.product = PRODUCT_P300;
        } else if (productName === "novatestw1000") {
          this.product = PRODUCT_W1000;
        } else if (productName === "dv3000") {
          this.product = PRODUCT_DV3000;
        } else if (productName === "pandair") {
          this.product = PRODUCT_PANDA;
        } else if (productName === "hotfind-sir") {
          this.product = PRODUCT_HOTFIND;
        } else if (productName === "satirvseries") {
          this.product = PRODUCT_SATIR2;
        }
      }
    }
    )

    if(!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }
}
