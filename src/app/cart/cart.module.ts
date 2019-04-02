import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { MatCardModule, MatIconModule, MatBadgeModule, MatListModule, MatButtonModule } from '@angular/material';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [CartComponent, CartIconComponent, CartListComponent, CartItemComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, MatBadgeModule, MatListModule, MatButtonModule],
  exports: [CartComponent],
  entryComponents: [CartIconComponent]
})
export class CartModule {}
