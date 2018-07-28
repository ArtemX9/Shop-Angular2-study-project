import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {UsersService} from '../../../services/users.service';
import {Router} from '@angular/router';
import {CartService} from '../../../services/cart.service';
import {OrdersService} from '../../../services/orders.service';
import {Order} from '../../../models/OrderModel';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {
  user: User;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private cartService: CartService,
    private ordersService: OrdersService
  ) {
  }

  ngOnInit() {
    this.user = new User(null, '', '', '', false);
  }

  onCheckout() {
    this.usersService.addUser(this.user).subscribe(() => {
      const order = new Order(this.user, this.cartService.getProductsInCart());
      this.ordersService.addOrder(order).subscribe(() => {
        this.cartService.clearCart();
        this.router.navigate(['']);
        alert('Your order was posted');
      });
    });
  }

  goBack() {
    this.router.navigate(['/cart/overview']);
  }
}
