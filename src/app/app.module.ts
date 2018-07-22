import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';
import {CoreModule} from './core/core.module';
import {DemoComponent} from './demo/demo.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductsRoutingModule} from './products/products-routing.module';
import {CartRoutingModule} from './cart/cart-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule,
    CoreModule,
    ProductsRoutingModule,
    CartRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
