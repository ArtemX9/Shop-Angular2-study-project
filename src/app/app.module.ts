import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';
import {CoreModule} from './core/core.module';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
