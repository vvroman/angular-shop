import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICartItem } from '../../shared/models/cart-item.interface';
import { CartCommunicationService } from '../../shared/services/cart-communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  items: ICartItem[] = [];

  private sub: Subscription;

  constructor(private cartCommunicationService: CartCommunicationService) {}

  ngOnInit() {
    this.sub = this.cartCommunicationService.channel$.subscribe(item => {
      this.items.push(item);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
