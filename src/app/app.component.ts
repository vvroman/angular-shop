import { Component } from '@angular/core';

import { ProductsService } from "./products/services/products.service";
import { IProduct } from './products/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'shop';
  products: IProduct[];

  constructor(private productsService: ProductsService) {}

  async ngOnInit() {
    this.products = await this.productsService.getProducts();
  }

  getProducts(): IProduct[] {
    return this.products;
  }

}
