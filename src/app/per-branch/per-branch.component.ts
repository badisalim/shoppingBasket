import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'})};

@Component({
  selector: 'app-per-branch',
  templateUrl: './per-branch.component.html',
  styleUrls: ['./per-branch.component.css']
})
export class PerBranchComponent implements OnInit {
  HttpClient: any;
  shop: any;
  constructor(private httpClient: HttpClient) { }


  ngOnInit() {
    this.httpClient.get('http://localhost:3000/shop/products')
      .subscribe(shop => {
        console.log(shop);
        this.shop = shop;
      });
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
}


