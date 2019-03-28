import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatGridListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/components/cart/cart.component';
import { CartCommunicationService } from './cart/shared/services/cart-communication.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProductsModule,
    MatGridListModule
  ],
  providers: [CartCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
