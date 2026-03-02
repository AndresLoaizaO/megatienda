import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = [
      {
        id: 1,
        name: 'Zapato deportivo',
        price: 120,
        quantity: 2,
        image: 'https://via.placeholder.com/120',
      },
      {
        id: 2,
        name: 'Camiseta deportiva',
        price: 60,
        quantity: 1,
        image: 'https://via.placeholder.com/120',
      },
    ];
  }
  loadCart() {
    this.cartItems = this.cartService.getCart();
  }

  increase(item: any) {
    item.quantity++;
  }

  decrease(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  remove(id: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
  }

  get subtotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }
}
