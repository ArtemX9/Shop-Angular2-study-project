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
      const newProduct = new ProductInCart(product);
      newProduct.incrementQuantity();
      this.updateProduct(newProduct, product);
      this.totalQuantity += 1;
    } else {
      product = new ProductInCart(productToAdd);
      this.productsInCart.push(product);
      this.totalQuantity += product.quantity;
    }

    this.totalSum = this.calculateTotalSum();
  }

  incrementProductQuantity(productInCart: ProductInCart): void {
    const newProduct = new ProductInCart(productInCart);
    newProduct.incrementQuantity();
    this.updateProduct(newProduct, productInCart);

    this.totalSum = this.calculateTotalSum();
    this.totalQuantity += 1;
  }

  decrementProductQuantity(productInCart: ProductInCart): void {
    const newProduct = new ProductInCart(productInCart);
    newProduct.decrementQuantity();
    this.updateProduct(newProduct, productInCart);

    if (newProduct.quantity === 0) {
      this.removeFromCart(newProduct);
    }

    this.totalSum = this.calculateTotalSum();
    this.totalQuantity -= 1;
  }

  deleteFromCart(productInCart: ProductInCart) {
    this.removeFromCart(productInCart);
    this.totalSum = this.calculateTotalSum();
    this.totalQuantity -= productInCart.quantity;
  }

  clearCart(): ProductInCart[] {
    this.productsInCart = [];
    this.totalSum = 0;
    this.totalQuantity = 0;

    return this.productsInCart;
  }

  private updateProduct(newProduct: ProductInCart, oldProduct: ProductInCart) {
    const elementIndexToReplace = this.productsInCart.indexOf(oldProduct);
    this.productsInCart[elementIndexToReplace] = newProduct;
  }

  private removeFromCart(productInCart: ProductInCart) {
    const elementIndexToRemove = this.productsInCart.indexOf(productInCart);
    this.productsInCart.splice(elementIndexToRemove, 1);
  }

  private calculateTotalSum(): number {
    return this.productsInCart.reduce((sum, product) => {
      return sum + product.quantity * product.price;
    }, 0);
  }
}
