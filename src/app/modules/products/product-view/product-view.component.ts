import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule, CardModule, RatingModule, ButtonModule, FormsModule],
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent {
  @Input() product: any; // simple por ahora

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product.id, 1).subscribe(() => {
      this.cartService.getCart().subscribe((cart) => {
        const total = cart.reduce(
          (sum: any, item: any) => sum + item.quantity,
          0,
        );

        this.cartService.updateCartCount(total);
      });
    });
  }
}
