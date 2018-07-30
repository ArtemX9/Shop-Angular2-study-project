import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';
import {CoreModule} from './core/core.module';
import {DemoComponent} from './demo/demo.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './login/login/login.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TimingInterceptorService} from './core/services/timing-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    ProductsModule,
    CartModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TimingInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
