import { Injectable } from '@angular/core';
import {Order} from '../models/OrderModel';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {LocalStorageService} from '../core/services/local-storage.service';

const ORDERS_LS_KEY = 'orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders: Order[] = [];

  constructor(
    private localStorageService: LocalStorageService
  ) {
    const savedOrders: Order[] = localStorageService.getItem(ORDERS_LS_KEY);
    this.orders = savedOrders || [];
  }

  getOrders(): Observable<Order[]> {
    return of(this.orders).pipe(
      delay(1000)
    );
  }

  addOrder(order: Order) {
    this.orders = [...this.orders, order];
    this.localStorageService.setItem(ORDERS_LS_KEY, this.orders);
  }

}
