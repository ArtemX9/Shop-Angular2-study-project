import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductInCart} from '../models/ProductModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() productsInCart: [ProductInCart];
  @Output() onClearCartPress: EventEmitter<void> = new EventEmitter<void>();
  @Output() onIncrementAmountPress: EventEmitter<ProductInCart> = new EventEmitter<ProductInCart>();
  @Output() onDecrementAmountPress: EventEmitter<ProductInCart> = new EventEmitter<ProductInCart>();

  constructor() {
  }

  ngOnInit() {
  }

  clearCart(): void {
    this.onClearCartPress.emit();
  }

  incrementAmount(productInCart: ProductInCart): void {
    this.onIncrementAmountPress.emit(productInCart);
  }

  decrementAmount(productInCart: ProductInCart): void {
    this.onDecrementAmountPress.emit(productInCart);
  }
}
