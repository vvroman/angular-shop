import { NgModule } from '@angular/core';

import { MatCardModule, MatButtonModule, MatChipsModule } from '@angular/material';

import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatChipsModule],
  exports: [ProductComponent]
})
export class ProductsModule {}
