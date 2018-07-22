import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {ProductsEditableListComponent} from './components/products-editable-list/products-editable-list.component';
import {ProductEditFormComponent} from './components/product-edit-form/product-edit-form.component';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  children: [{
    path: 'products',
    component: ProductsEditableListComponent
  }, {
    path: 'edit-product/:name',
    component: ProductEditFormComponent
  }, {
    path: '',
    component: ProductsEditableListComponent
  }]
}];

export const adminComponents = [AdminComponent, ProductEditFormComponent, ProductsEditableListComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
