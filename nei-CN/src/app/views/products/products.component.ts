import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCT_P100, PRODUCT_P300 } from 'src/app/constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productName = params.get("product");
      if (productName === "novatestp100") {
        this.product = PRODUCT_P100;
      } else if (productName === "novatestp300") {
        this.product = PRODUCT_P300;
      }
    })
  }

}
