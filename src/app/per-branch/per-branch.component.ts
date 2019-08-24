import { Component, OnInit } from '@angular/core';

import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Product } from '../types';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-per-branch',
  templateUrl: './per-branch.component.html',
  styleUrls: ['./per-branch.component.css']
})
export class PerBranchComponent implements OnInit {
  public shop = [
    {
      branch: 'Hofer',
      baskets: [
        {
          name: 'hofer1',
          products: [
            { product: 'Apple', amount: 2, price: 1.5, code: 2541 },
            { product: 'Milch', amount: 3, price: 1.2, code: 2542 },
            { product: 'Apple', amount: 2, price: 1.5, code: 2541 }
          ]
        },
        {
          name: 'hofer2',
          products: [
            { product: 'Banana', amount: 2, price: 1.5, code: 2543 },
            { product: 'Apple', amount: 3, price: 1.2, code: 2544 },
            { product: 'coffee', amount: 4, price: 3, code: 2545 }
          ]
        }
      ]
    },
    {
      branch: 'Billa',
      baskets: [
        {
          name: 'billa1',
          products: [
            { product: 'tomato', amount: 2, price: 0.5, code: 2546 },
            { product: 'Apple', amount: 3, price: 0.9, code: 2547 },
            { product: 'orange', amount: 4, price: 1.2, code: 2548 }
          ]
        },
        {
          name: 'billa2',
          products: [
            { product: 'juise', amount: 2, price: 1.5, code: 2549 },
            { product: 'Apple', amount: 2, price: 1.5, code: 2541 },
            { product: 'chokolateaaaaaaaaaaaaa', amount: 3333, price: 2.5, code: 2540 }
          ]
        }
      ]
    }
  ];
  constructor() { }


  ngOnInit() {
    console.log(this.shop);

  }

  public calculateBasketTotal(basket) {
    const productsTotal = basket.products.map(product => product.amount * product.price);
    return productsTotal.reduce((product1, product2) => product1 + product2);
  }

  public calculateBranchTotal(branch) {
    return branch.baskets.map(this.calculateBasketTotal).reduce((total1, total2) => total1 + total2);
  }
  public calculateShopTotal(shop) {

    const baskets = shop.map(branch => this.calculateBranchTotal(branch));
    console.log(baskets);

    return baskets.reduce((one, two) => one + two);

  }


  public calculateProductTotal(product) {
    return product.branches.map(this.calculateBranchTotal).reduce((b1, b2) => b1 + b2);
  }



}


