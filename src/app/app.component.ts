import { Component } from '@angular/core';

import { ProductsService } from './products/services/products.service';
import { IProduct } from './products/models/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'shop';
  products: IProduct[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().then((products: IProduct[]) => { this.products = products; });
  }

  getProducts(): IProduct[] {
    return this.products;
  }

}
