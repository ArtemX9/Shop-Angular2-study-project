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

  constructor(product: IProduct);
  constructor(productInCart: IProductInCart) {
    this.name = productInCart.name;
    this.description = productInCart.description;
    this.price = productInCart.price;
    this.category = productInCart.category;
    this.isAvailable = productInCart.isAvailable;
    this.amount = productInCart.amount || 1;
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
