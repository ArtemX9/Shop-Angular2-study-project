import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../models/ProductModel';
import {Category} from '../../../models/CategoryModel';

@Component({
  selector: 'app-product-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productBuyPress: EventEmitter<Product> = new EventEmitter<Product>();

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

  onPutToCart(): void {
    this.productBuyPress.emit(this.product);
  }
}
