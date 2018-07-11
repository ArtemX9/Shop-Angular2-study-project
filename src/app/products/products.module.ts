import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponent} from './components/product-component/product.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ProductListComponent, ProductComponent],
  exports: [ProductListComponent]
})
export class ProductsModule { }
