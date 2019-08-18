import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  openedProduct = undefined;

  products: { name: string, price: number }[] = [
    {
      name: "Tv",
      price: 132123
    },
    {
      name: "Phone",
      price: 123.2323
    },
    {
      name: 'vibrator',
      price: 123321
    }
  ] 

  onProductOpen(product){
    this.openedProduct = product;
  }

  constructor() { }

  ngOnInit() {
  }

}
