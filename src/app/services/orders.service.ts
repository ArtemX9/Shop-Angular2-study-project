import {Injectable} from '@angular/core';
import {Order} from '../models/OrderModel';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettingsService} from './app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(
    private http: HttpClient,
    private appSettings: AppSettingsService
  ) {
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.appSettings.getApiUrl()}/orders`);
  }

  addOrder(order: Order): Observable<Order> {
    const url = `${this.appSettings.getApiUrl()}/orders`;
    const body = JSON.stringify(order);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<Order>(url, body, options);
  }
}
