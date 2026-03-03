import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartItems: any[] = [];
  subtotal: number = 0;

  constructor(private cartService: CartService) {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getItems();
    this.subtotal = this.cartService.getSubtotal();
  }

  increase(item: any) {
    this.cartService.increaseQuantity(item);
    this.loadCart();
  }

  decrease(item: any) {
    this.cartService.decreaseQuantity(item);
    this.loadCart();
  }

  remove(id: number) {
    this.cartService.removeItem(id);
    this.loadCart();
  }
}