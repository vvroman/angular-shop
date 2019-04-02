import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CartCommunicationService } from 'src/app/core/services/cart-communication.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {
  constructor(private cartService: CartCommunicationService) {}

  ngOnInit() {}

  get itemsCount(): number {
    const count = this.cartService.getItemsCount();
    return count === 0 ? null : count;
  }
}
