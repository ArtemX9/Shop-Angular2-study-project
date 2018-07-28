import {Injectable} from '@angular/core';
import {Product} from '../models/ProductModel';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) {
  }

  getProducts(): Promise<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products').toPromise();
  }

  getProductByName(name: String): Promise<Product> {
    return this.http.get<Product>(`http://localhost:3000/products?name=${name}`).toPromise().then(data => data[0]);
  }
}
