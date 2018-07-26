import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {ProductsEditableListComponent} from './components/products-editable-list/products-editable-list.component';
import {ProductEditFormComponent} from './components/product-edit-form/product-edit-form.component';
import {AdminGuard} from '../shared/guard/admin.guard';
import {OrdersListComponent} from './components/orders-list/orders-list.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  canActivate: [AdminGuard],
  children: [{
    path: '',
    children: [{
      path: 'products',
      component: ProductsEditableListComponent
    }, {
      path: 'edit-product/:name',
      component: ProductEditFormComponent
    }, {
      path: 'orders',
      component: OrdersListComponent
    }, {
      path: '',
      component: ProductsEditableListComponent
    }]
  }]
}];

export const adminComponents = [AdminComponent, ProductEditFormComponent, ProductsEditableListComponent, OrdersListComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
