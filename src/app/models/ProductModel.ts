interface IProduct {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}

interface IProductInCart extends IProduct {
  amount: number;
}

export enum Category {
  Vegetables = 'Vegetables',
  Fruits = 'Fruits',
  IceCream = 'IceCream',
  Berries = 'Berries'
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

export class ProductInCart implements IProductInCart {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  amount: number;

  constructor(product: IProduct) {
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.category = product.category;
    this.isAvailable = product.isAvailable;
    this.amount = 1;
  }

  constructor(name: string, description: string, price: number, category: Category, isAvailable: boolean, amount: number = 0) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.isAvailable = isAvailable;
    this.amount = amount;
  }

  incrementAmount(): void {
    this.amount += 1;
  }

  decrementAmount(): void {
    if (this.amount !== 0) {
      this.amount -= 1;
    }
  }
}
