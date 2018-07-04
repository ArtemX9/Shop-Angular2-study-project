import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/ProductModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input() products: [Product];
@Output() onProductBuy: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  handleProductBuyPress(boughtProduct: Product): void {
    this.onProductBuy.emit(boughtProduct);
  }
}
