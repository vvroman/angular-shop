import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';
import { MatCardModule, MatIconModule, MatBadgeModule } from '@angular/material';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';

@NgModule({
  declarations: [CartComponent, CartIconComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, MatBadgeModule],
  exports: [CartComponent],
  entryComponents: [CartIconComponent]
})
export class CartModule {}
