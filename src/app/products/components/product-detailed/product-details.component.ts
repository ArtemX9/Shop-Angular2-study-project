import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {ProductsService} from '../../../services/products.service';
import {Product} from '../../../models/ProductModel';

@Component({
  selector: 'app-comments',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private router: Router, private route: ActivatedRoute, private productsService: ProductsService) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: Params) => this.productsService.getProductByName(params.get('name')))
    ).subscribe(
      product => this.product = product,
      err => console.log(err)
    );
  }

  onShowCommentsPress() {
    this.router.navigate([{
      outlets: {
        comments: [
          'comments',
          this.product.name
        ]
      }
    }]);
  }

  onBackToProductsListPress() {
    /*
      Using .then to mitigate issue connected to not removing named outlet from path.
      For more details see: https://github.com/angular/angular/issues/15338
     */
    this.router.navigate([{
      outlets: {
        comments: null
      }
    }]
    ).then(() => {
      this.router.navigate(['products']);
    });
  }
}
