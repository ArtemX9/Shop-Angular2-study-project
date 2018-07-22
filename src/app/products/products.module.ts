import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponent} from './components/product-component/product.component';
import {SharedModule} from '../shared/shared.module';
import { ProductDetailsComponent } from './components/product-detailed/product-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import {ProductsRoutingModule} from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [ProductListComponent, ProductComponent, ProductDetailsComponent, CommentsComponent],
  exports: [ProductListComponent]
})
export class ProductsModule { }
