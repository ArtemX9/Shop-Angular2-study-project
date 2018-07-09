import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponent} from './components/product-component/product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductListComponent, ProductComponent],
  exports: [ProductListComponent]
})
export class ProductsModule { }
