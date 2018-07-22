import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../models/ProductModel';
import {switchMap} from 'rxjs/operators';
import {ProductsService} from '../../../services/products.service';

@Component({
  selector: 'app-product-edit-form',
  templateUrl: './product-edit-form.component.html',
  styleUrls: ['./product-edit-form.component.css']
})
export class ProductEditFormComponent implements OnInit {
  product: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      switchMap(params => this.productsService.getProductByName(params.get('name')))
    ).subscribe(product => this.product = product);
  }

  onSave() {

    this.goBack();
  }

  goBack() {
    this.router.navigate(['/admin']);
  }
}
