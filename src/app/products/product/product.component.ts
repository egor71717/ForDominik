import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output() close = new EventEmitter();
  @Input() product;

  constructor() { }

  ngOnInit() {
  }

  onClose(){
    this.close.emit();
  }

}
