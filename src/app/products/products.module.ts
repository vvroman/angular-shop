import { NgModule } from '@angular/core';

import { MatCardModule, MatButtonModule, MatChipsModule, MatGridTile, MatGridListModule } from '@angular/material';

import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, SharedModule],
  exports: [ProductListComponent]
})
export class ProductsModule {}
