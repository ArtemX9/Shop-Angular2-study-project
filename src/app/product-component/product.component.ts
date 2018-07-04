import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category, Product} from '../models/ProductModel';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() onProductBuyPress: EventEmitter<Product> = new EventEmitter<Product>();

  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  constructor() {
  }

  ngOnInit() {
    this.name = this.product.name;
    this.description = this.product.description;
    this.price = this.product.price;
    this.category = this.product.category;
    this.isAvailable = this.product.isAvailable;
  }

  putToCart(): void {
    this.onProductBuyPress.emit(this.product);
  }
}
