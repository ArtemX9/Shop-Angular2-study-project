import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../services/orders.service';
import {IOrder} from '../../../models/OrderModel';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  orders: Observable<IOrder[]>;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.orders = this.ordersService.getOrders();
  }

}
