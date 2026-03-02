import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Button} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {Card} from 'primeng/card';
import {SharedModule} from 'primeng/api';
import {Product} from '../../../models/product.model';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule, CardModule, RatingModule, Button, FormsModule, SharedModule],   // para usar directivas como *ngIf, *ngFor
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  @Input() public product: Product = new Product();
}
