import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommentsComponent} from './products/components/comments/comments.component';
import {LoginComponent} from './login/login/login.component';
import {AdminGuard} from './core/guard/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }, {
    path: 'comments/:name',
    component: CommentsComponent,
    outlet: 'comments'
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren: './admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
