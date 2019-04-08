import { Component, OnInit, Input } from '@angular/core';

import { IProduct } from '../../models/product.interface';
import { CartService } from 'src/app/core/services/cart.service';
import { CartItem } from 'src/app/cart/shared/models/cart-item.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private cartService: CartService) {}

  @Input() product: IProduct;

  ngOnInit() {}

  onBuyClick(product: IProduct): void {
    this.cartService.add(new CartItem(product, 1));
  }
}
