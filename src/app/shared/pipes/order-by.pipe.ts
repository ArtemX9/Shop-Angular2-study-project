import {Pipe, PipeTransform} from '@angular/core';
import {ProductInCart} from '../../models/ProductInCartModel';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(products: ProductInCart[], field?: string, isAsc?: string): any {
    return [...products.sort((a, b) => {
      const res = a[field] - b[field];
      switch (isAsc) {
        case 'true':
          return res >= 0 ? 1 : -1;
        case 'false':
          return res > 0 ? -1 : 1;
        default:
          return res;
      }
    })];
  }

}
