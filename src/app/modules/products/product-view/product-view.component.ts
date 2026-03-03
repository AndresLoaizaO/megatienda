import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    RatingModule,
    ButtonModule,
    FormsModule
  ],
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {

  @Input() product: any;  // 🔥 simple por ahora

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
    console.log('Producto agregado:', this.product);
  }
}