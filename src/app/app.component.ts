import { Component } from '@angular/core';
import {ProductsService} from './products.service';
import {Product, ProductInCart} from './models/ProductModel';
import {CartService} from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: [Product];
  productsInCart: [ProductInCart];

  constructor(private productsService: ProductsService, private productsInCartService: CartService) {
    this.products = productsService.getProducts();
    this.productsInCart = productsInCartService.getProductsInCart();
  }

  handleProductBuyPress(boughtProduct: Product): void {
    this.productsInCartService.buyProduct(boughtProduct);
  }

  handleClearCartPress(): void {
    this.productsInCart = this.productsInCartService.clearCart();
  }

  handleIncrementAmountPress(productInCart: ProductInCart): void {
    this.productsInCartService.incrementProductAmount(productInCart);
  }

  handleDecrementAmountPress(productInCart: ProductInCart): void {
    this.productsInCartService.decrementProductAmount(productInCart);
  }
}
