import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductInCart} from '../../../models/ProductModel';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Input() productsInCart: ProductInCart[];
  @Input() totalSum: number;
  @Output() incrementAmount: EventEmitter<ProductInCart> = new EventEmitter<ProductInCart>();
  @Output() decrementAmount: EventEmitter<ProductInCart> = new EventEmitter<ProductInCart>();
  @Output() delete: EventEmitter<ProductInCart> = new EventEmitter<ProductInCart>();
  @Output() clearCart: EventEmitter<ProductInCart> = new EventEmitter<ProductInCart>();

  constructor() {
  }

  ngOnInit() {
  }

  onIncrementAmount(productInCart: ProductInCart): void {
    this.incrementAmount.emit(productInCart);
  }

  onDecrementAmount(productInCart: ProductInCart): void {
    this.decrementAmount.emit(productInCart);
  }

  onDelete(productInCart: ProductInCart): void {
    this.delete.emit(productInCart);
  }

  onClearCart(): void {
    this.clearCart.emit();
  }
}
