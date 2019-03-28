import { Component, OnInit, Input } from '@angular/core';
import { SafeMethodCall } from '@angular/compiler';

import { IProduct } from '../../models/product.interface';
import { ProductCategories } from '../../shared/product-categories';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() {
  }

  @Input() product: IProduct;

  ngOnInit() {
  }

// name: String = "Product1";

// description: String = "Short product description";

// price: Number = 99.99;

// category: ProductCategories = ProductCategories.Category1;

// isAvailable: Boolean = false;

// tags: Array<String> = _tags;
}
