import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/ProductModel';
import {ProductsService} from '../../../services/products.service';
import {CartService} from '../../../services/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Promise<Product[]>;

  constructor(
    private productsService: ProductsService,
    private productsInCartService: CartService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onProductBuyPress(boughtProduct: Product): void {
    this.productsInCartService.buyProduct(boughtProduct);
  }

  onShowDetailedPress(product: Product): void {
    this.router.navigate(['/product', product.name]);
  }
}
