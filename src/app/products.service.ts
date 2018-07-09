import { Injectable } from '@angular/core';
import {Category, Product} from './models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [];

  constructor() {
    this.products.push(new Product('Watermelon', 'Watermelon from Russia', 5, Category.Berries, true));
    this.products.push(new Product('Melon', 'Melon from Georgia', 3, Category.Berries, true));
    this.products.push(new Product('Pineapple', 'Pineapple from Japan', 7, Category.Berries, true));
    this.products.push(new Product('Vinegar', 'Vinegar from France', 10, Category.Berries, true));
    this.products.push(new Product('Peach', 'Peach from Spain', 11, Category.Fruits, false));
    this.products.push(new Product('Tomato', 'Tomato from Russia', 15, Category.Vegetables, false));
    this.products.push(new Product('Vanilla', 'Vanilla Ice Cream from USA', 20, Category.IceCream, true));
  }

  getProducts(): Product[] {
    return this.products;
  }
}
