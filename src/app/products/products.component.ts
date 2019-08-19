import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {


  subscriptions: Subscription = new Subscription();
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

  constructor(
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit() {
    const s = this.route.params.subscribe(e => {
      const item = this.products.find(e1 => e1.name === e.id);
      if(item)
        this.openedProduct = item
    });
    this.subscriptions.add(s);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
