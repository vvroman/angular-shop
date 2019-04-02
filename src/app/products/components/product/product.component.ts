import { Component, OnInit, Input } from '@angular/core';

import { IProduct } from '../../models/product.interface';
import { CartCommunicationService } from 'src/app/core/services/cart-communication.service';
import { CartItem } from 'src/app/cart/shared/models/cart-item.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private cartCommunicationService: CartCommunicationService) {}

  @Input() product: IProduct;

  ngOnInit() {}

  onBuyClick(product: IProduct): void {
    this.cartCommunicationService.add(new CartItem(product, 1));
  }
}
