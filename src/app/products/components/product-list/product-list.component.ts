import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../models/ProductModel';
import {ProductsService} from '../../../products.service';
import {CartService} from '../../../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService, private productsInCartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onProductBuyPress(boughtProduct: Product): void {
    this.productsInCartService.buyProduct(boughtProduct);
  }
}
