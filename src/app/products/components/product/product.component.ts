import { Component, OnInit, Input } from '@angular/core';
import { SafeMethodCall } from '@angular/compiler';

import { ProductSizes } from '../../../common/constants';

const _tags = ['foo', 'bar', 'baz'];

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

name: String = "Product1";

description: String = "Short product description";

price: Number = 99.99;

category: ProductSizes = ProductSizes.XXXL;

isAvailable: Boolean = false;

tags: Array<String> = _tags; 
}
