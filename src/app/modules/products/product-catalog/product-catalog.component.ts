import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from '../product-view/product-view.component';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [
    CommonModule,
    ProductViewComponent   // importa el otro standalone component
  ],
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent { }
