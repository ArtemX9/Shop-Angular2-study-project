import {IProduct} from './ProductModel';
import {Category} from './CategoryModel';

interface IProductInCart extends IProduct {
  quantity: number;
}

export class ProductInCart implements IProductInCart {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  quantity: number;

  constructor(product: IProduct);
  constructor(productInCart: IProductInCart) {
    this.name = productInCart.name;
    this.description = productInCart.description;
    this.price = productInCart.price;
    this.category = productInCart.category;
    this.isAvailable = productInCart.isAvailable;
    this.quantity = productInCart.quantity || 1;
  }

  incrementQuantity(): void {
    this.quantity += 1;
  }

  decrementQuantity(): void {
    if (this.quantity !== 0) {
      this.quantity -= 1;
    }
  }
}
