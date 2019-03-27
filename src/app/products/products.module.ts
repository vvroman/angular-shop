import { NgModule } from '@angular/core';

import { MatCardModule, MatButtonModule, MatChipsModule } from '@angular/material';

import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatChipsModule],
  exports: [ProductComponent]
})
export class ProductsModule {}
