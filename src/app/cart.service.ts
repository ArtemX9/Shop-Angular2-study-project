import {Injectable} from '@angular/core';
import {Product, ProductInCart} from './models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: [ProductInCart] = [];

  constructor() {
  }

  getProductsInCart(): [ProductInCart] {
    return this.productsInCart;
  }

  buyProduct(productToAdd: Product): void {
    let product = this.productsInCart.find(productInCart => productInCart.name === productToAdd.name);
    if (product) {
      product.incrementAmount();
    } else {
      product = new ProductInCart(productToAdd);
      this.productsInCart.push(product);
    }
  }

  incrementProductAmount(productInCart: ProductInCart): void {
    productInCart.incrementAmount();
  }

  decrementProductAmount(productInCart: ProductInCart): void {
    productInCart.decrementAmount();

    if (productInCart.amount === 0) {
      const elementIndexToRemove = this.productsInCart.indexOf(productInCart);
      this.productsInCart.splice(elementIndexToRemove, 1);
    }
  }

  clearCart(): [ProductInCart] {
    this.productsInCart = [];
    return this.productsInCart;
  }
}
