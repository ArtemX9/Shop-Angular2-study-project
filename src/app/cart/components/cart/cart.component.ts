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
  totalQuantity: number;

  constructor(private productsInCartService: CartService) {
  }

  ngOnInit() {
    this.productsInCart = this.productsInCartService.getProductsInCart();
    this.totalSum = this.productsInCartService.getTotalSum();
    this.totalQuantity = this.productsInCartService.getTotalQuantity();
  }

  ngDoCheck() {
    const newTotalSum = this.productsInCartService.getTotalSum();
    const newTotalQuantity = this.productsInCartService.getTotalQuantity();
    const newProductsInCart = this.productsInCartService.getProductsInCart();

    if (this.totalSum !== newTotalSum || this.totalQuantity !== newTotalQuantity || this.productsInCart !== newProductsInCart) {
      this.totalSum = newTotalSum;
      this.totalQuantity = newTotalQuantity;
      this.productsInCart = newProductsInCart;
    }
  }

  onClearCart(): void {
    this.productsInCart = this.productsInCartService.clearCart();
  }

  onIncrementQuantity(productInCart: ProductInCart): void {
    this.productsInCartService.incrementProductQuantity(productInCart);
  }

  onDecrementQuantity(productInCart: ProductInCart): void {
    this.productsInCartService.decrementProductQuantity(productInCart);
  }

  onDelete(productInCart: ProductInCart): void {
    this.productsInCartService.deleteFromCart(productInCart);
  }
}
