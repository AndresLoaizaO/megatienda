import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Button} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {interfaceProduct} from '../interface/interfaceProduct';
import {SharedModule} from 'primeng/api';
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
// En tu componente .ts
  producto: interfaceProduct = {
    name: 'Smartwatch Series S',
    categoria: 'Accesorios',
    precio: 85.50,
    rating: 5,
    imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScLM8IP85y-sXW1OvJ1vvtQadLIsK5FxSakg&s'
  };
}
