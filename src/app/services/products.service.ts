import {Injectable} from '@angular/core';
import {Product} from '../models/ProductModel';
import {HttpClient} from '@angular/common/http';
import {AppSettingsService} from './app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private appSettings: AppSettingsService
  ) {
  }

  getProducts(): Promise<Product[]> {
    return this.http.get<Product[]>(`${this.appSettings.getApiUrl()}/products`).toPromise();
  }

  getProductByName(name: String): Promise<Product> {
    return this.http.get<Product>(`${this.appSettings.getApiUrl()}/products?name=${name}`).toPromise().then(data => data[0]);
  }
}
