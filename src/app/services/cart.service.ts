import {Injectable} from '@angular/core';
import {Product} from '../models/ProductModel';
import {ProductInCart} from '../models/ProductInCartModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: ProductInCart[] = [];
  private totalSum = 0;
  private totalQuantity = 0;

  constructor() {
  }

  getProductsInCart(): ProductInCart[] {
    return this.productsInCart;
  }

  getTotalSum(): number {
    return this.totalSum;
  }

  getTotalQuantity(): number {
    return this.totalQuantity;
  }

  buyProduct(productToAdd: Product): void {
    let product = this.productsInCart.find(productInCart => productInCart.name === productToAdd.name);
    if (product) {
      product.incrementQuantity();
    } else {
      product = new ProductInCart(productToAdd);
      this.productsInCart.push(product);
    }

    this.totalSum = this.calculateTotalSum();
    this.totalQuantity += product.quantity;
  }

  incrementProductQuantity(productInCart: ProductInCart): void {
    productInCart.incrementQuantity();
    this.totalSum = this.calculateTotalSum();
    this.totalQuantity += 1;
  }

  decrementProductQuantity(productInCart: ProductInCart): void {
    productInCart.decrementQuantity();

    if (productInCart.quantity === 0) {
      this.removeFromCart(productInCart);
    }

    this.totalSum = this.calculateTotalSum();
    this.totalQuantity -= 1;
  }

  deleteFromCart(productInCart: ProductInCart) {
    this.removeFromCart(productInCart);
    this.totalSum = this.calculateTotalSum();
    this.totalQuantity = 0;
  }

  clearCart(): ProductInCart[] {
    this.productsInCart = [];
    this.totalSum = 0;
    this.totalQuantity = 0;

    return this.productsInCart;
  }

  private removeFromCart(productInCart: ProductInCart) {
    const elementIndexToRemove = this.productsInCart.indexOf(productInCart);
    this.totalQuantity -= productInCart.quantity;
    this.productsInCart.splice(elementIndexToRemove, 1);
  }

  private calculateTotalSum(): number {
    return this.productsInCart.reduce((sum, product) => {
      return sum + product.quantity * product.price;
    }, 0);
  }
}
