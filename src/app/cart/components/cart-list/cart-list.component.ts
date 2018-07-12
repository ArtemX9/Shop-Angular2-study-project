import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductInCart} from '../../../models/ProductInCartModel';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Input() productsInCart: ProductInCart[];
  @Input() totalSum: number;
  @Input() totalQuantity: number;

  @Output() incrementQuantity: EventEmitter<ProductInCart> = new EventEmitter<ProductInCart>();
  @Output() decrementQuantity: EventEmitter<ProductInCart> = new EventEmitter<ProductInCart>();
  @Output() delete: EventEmitter<ProductInCart> = new EventEmitter<ProductInCart>();
  @Output() clearCart: EventEmitter<ProductInCart> = new EventEmitter<ProductInCart>();

  constructor() {
  }

  ngOnInit() {
  }

  onIncrementQuantity(productInCart: ProductInCart): void {
    this.incrementQuantity.emit(productInCart);
  }

  onDecrementQuantity(productInCart: ProductInCart): void {
    this.decrementQuantity.emit(productInCart);
  }

  onDelete(productInCart: ProductInCart): void {
    this.delete.emit(productInCart);
  }

  onClearCart(): void {
    this.clearCart.emit();
  }
}
