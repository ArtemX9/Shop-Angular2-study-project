import {Component, DoCheck, IterableDiffers, OnInit} from '@angular/core';
import {ProductInCart} from '../../../models/ProductModel';
import {CartService} from '../../../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {
  productsInCart: ProductInCart[];
  totalSum: number;
  differ: any;

  constructor(private differs: IterableDiffers, private productsInCartService: CartService) {

  }

  ngOnInit() {
    this.productsInCart = this.productsInCartService.getProductsInCart();
    this.totalSum = this.productsInCartService.getTotalSum();
    this.differ = this.differs.find(this.productsInCart).create(null);
  }

  ngDoCheck() {
    const productsInCartChanges = this.differ.diff(this.productsInCart);
    if (productsInCartChanges) {
      this.totalSum = this.productsInCartService.getTotalSum();
    }
  }

  clearCart(): void {
    this.productsInCart = this.productsInCartService.clearCart();
  }

  onIncrementAmount(productInCart: ProductInCart): void {
    this.productsInCartService.incrementProductAmount(productInCart);
  }

  onDecrementAmount(productInCart: ProductInCart): void {
    this.productsInCartService.decrementProductAmount(productInCart);
  }
}
