import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from '../product-view/product-view.component';
import {Product} from '../../../models/product.model';
import {ProductServiceService} from '../../../services/product-service.service';

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
export class ProductCatalogComponent implements OnInit {
  listProducts: Product[] = [];
  constructor(
    private _productServiceService : ProductServiceService
  ) { }
  ngOnInit() {
    this._productServiceService.getProducts().subscribe(data => {
      this.listProducts = data;
      console.log(this.listProducts);
    });
  }

}
