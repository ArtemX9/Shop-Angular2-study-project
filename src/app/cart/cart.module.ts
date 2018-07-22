import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {cartRoutingComponents, CartRoutingModule} from './cart-routing.module';
import {CartListComponent} from './components/cart-list/cart-list.component';
import { CartCheckoutComponent } from './components/checkout/cart-checkout.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    CartRoutingModule
  ],
  declarations: [cartRoutingComponents, CartListComponent, CartItemComponent, CartCheckoutComponent]
})
export class CartModule { }
