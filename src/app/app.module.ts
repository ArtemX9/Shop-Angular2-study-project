import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';
import {CoreModule} from './core/core.module';
import {DemoComponent} from './demo/demo.component';
import {AppRoutingModule} from './app-routing.module';
import {AdminModule} from './admin/admin.module';
import { LoginComponent } from './login/login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    ProductsModule,
    CartModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
