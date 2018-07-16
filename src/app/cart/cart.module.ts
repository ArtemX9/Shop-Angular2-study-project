import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule
  ],
  declarations: [CartComponent, CartItemComponent, CartListComponent],
  exports: [CartComponent]
})
export class CartModule { }
