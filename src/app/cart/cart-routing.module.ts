import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CartComponent} from './cart.component';
import {CartOverviewComponent} from './components/cart-overview/cart-overview.component';
import {CartCheckoutComponent} from './components/checkout/cart-checkout.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    children: [{
      path: 'checkout',
      component: CartCheckoutComponent
    }, {
      path: 'overview',
      component: CartOverviewComponent
    }]
  }
];

export const cartRoutingComponents = [CartComponent, CartOverviewComponent, CartCheckoutComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartRoutingModule {
}
