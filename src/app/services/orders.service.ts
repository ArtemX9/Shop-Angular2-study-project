import {Injectable} from '@angular/core';
import {Order} from '../models/OrderModel';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(
    private http: HttpClient
  ) {
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`http://localhost:3000/orders`);
  }

  addOrder(order: Order): Observable<Order> {
    const url = 'http://localhost:3000/orders';
    const body = JSON.stringify(order);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<Order>(url, body, options);
  }
}
