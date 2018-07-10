import {Injectable} from '@angular/core';
import {Product} from './models/ProductModel';
import {ProductInCart} from './models/ProductInCartModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: ProductInCart[] = [];
  private totalSum = 0;

  constructor() {
  }

  getProductsInCart(): ProductInCart[] {
    return this.productsInCart;
  }

  getTotalSum(): number {
    return this.totalSum;
  }

  buyProduct(productToAdd: Product): void {
    let product = this.productsInCart.find(productInCart => productInCart.name === productToAdd.name);
    if (product) {
      product.incrementAmount();
    } else {
      product = new ProductInCart(productToAdd);
      this.productsInCart.push(product);
    }

    this.totalSum = this.calculateTotalSum();
  }

  incrementProductAmount(productInCart: ProductInCart): void {
    productInCart.incrementAmount();
    this.totalSum = this.calculateTotalSum();
  }

  decrementProductAmount(productInCart: ProductInCart): void {
    productInCart.decrementAmount();

    if (productInCart.amount === 0) {
      this.removeFromCart(productInCart);
    }

    this.totalSum = this.calculateTotalSum();
  }

  deleteFromCart(productInCart: ProductInCart) {
    this.removeFromCart(productInCart);
    this.totalSum = this.calculateTotalSum();
  }

  clearCart(): ProductInCart[] {
    this.productsInCart = [];
    this.totalSum = 0;

    return this.productsInCart;
  }

  private removeFromCart(productInCart: ProductInCart) {
    const elementIndexToRemove = this.productsInCart.indexOf(productInCart);
    this.productsInCart.splice(elementIndexToRemove, 1);
  }

  private calculateTotalSum(): number {
    return this.productsInCart.reduce((sum, product) => {
      return sum + product.amount * product.price;
    }, 0);
  }
}
