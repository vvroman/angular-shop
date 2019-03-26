import { Component } from '@angular/core';

import { productsMock } from "./products/mocks/products.mock";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';
  products = productsMock;
}
