import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommentsComponent} from './products/components/comments/comments.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }, {
    path: 'comments/:name',
    component: CommentsComponent,
    outlet: 'comments'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
