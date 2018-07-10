import {Component, DoCheck, OnInit} from '@angular/core';
import {ProductInCart} from '../../../models/ProductInCartModel';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {
  productsInCart: ProductInCart[];
  totalSum: number;

  constructor(private productsInCartService: CartService) {
  }

  ngOnInit() {
    this.productsInCart = this.productsInCartService.getProductsInCart();
    this.totalSum = this.productsInCartService.getTotalSum();
  }

  ngDoCheck() {
    const newTotalSum = this.productsInCartService.getTotalSum();
    if (this.totalSum !== newTotalSum) {
      this.totalSum = newTotalSum;
    }
  }

  onClearCart(): void {
    this.productsInCart = this.productsInCartService.clearCart();
  }

  onIncrementAmount(productInCart: ProductInCart): void {
    this.productsInCartService.incrementProductAmount(productInCart);
  }

  onDecrementAmount(productInCart: ProductInCart): void {
    this.productsInCartService.decrementProductAmount(productInCart);
  }

  onDelete(productInCart: ProductInCart): void {
    this.productsInCartService.deleteFromCart(productInCart);
  }
}
