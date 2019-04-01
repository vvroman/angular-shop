import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { CartIconComponent } from '../cart/components/cart-icon/cart-icon.component';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [PageComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    CartModule
  ], 
  exports: [
    PageComponent
  ]
})
export class SharedModule { }
