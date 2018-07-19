import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductDetailsComponent} from './components/product-detailed/product-details.component';
import {CommentsComponent} from './components/comments/comments.component';

const routes: Routes = [{
  path: 'products',
  component: ProductListComponent
}, {
  path: 'product/:name',
  component: ProductDetailsComponent
}, {
  path: 'comments',
  component: CommentsComponent,
  outlet: 'comments'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
