import {Category} from './CategoryModel';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}

export class Product implements IProduct {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  constructor(name: string, description: string, price: number, category: Category, isAvailable: boolean) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.isAvailable = isAvailable;
  }
}


