import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
<<<<<<< HEAD
  MatButtonModule,
  MatCardModule
=======
  MatGridListModule
>>>>>>> e507a390d3cd7caef7284c7f903401dbec44d38a
} from '@angular/material';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatButtonModule,
    MatCardModule
=======
    ProductsModule,
    MatGridListModule
>>>>>>> e507a390d3cd7caef7284c7f903401dbec44d38a
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
