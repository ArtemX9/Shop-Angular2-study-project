import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartComponent, CartItemComponent, CartListComponent],
  exports: [CartComponent]
})
export class CartModule { }
