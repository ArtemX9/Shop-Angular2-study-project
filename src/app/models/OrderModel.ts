import {ProductInCart} from './ProductInCartModel';
import {IUser} from './User';

export interface IOrder {
  user: IUser;
  order: ProductInCart[];
}

export class Order implements IOrder {
  constructor(
    public user: IUser,
    public order: ProductInCart[]
  ) {}
}
