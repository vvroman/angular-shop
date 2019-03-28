import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/product.interface';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: IProduct[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().then((products: IProduct[]) => { this.products = products; });
  }

  getProducts(): IProduct[] {
    return this.products;
  }

}
