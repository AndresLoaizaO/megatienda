import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from '../product-view/product-view.component';
import {Product} from '../../../models/product.model';
import {ProductServiceService} from '../../../services/product-service.service';
import {FormsModule} from '@angular/forms';
import {ProductFilter} from '../../../models/productFilter';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [
    CommonModule,
    ProductViewComponent,
    FormsModule,
    // importa el otro standalone component
  ],
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {
  listProducts: Product[] = [];
  listProductsTodos: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;

  constructor(
    private _productServiceService : ProductServiceService
  ) { }
  ngOnInit() {
    this._productServiceService.getProducts().subscribe(data => {
      this.listProducts = data;
      this.listProductsTodos = data;
      this.llenarListas();
    });
  }

  llenarListas() {
    this.categories = [... new Set(this.listProducts
      .filter(p => p.category)
      .map(p => p.category as string))];
    console.log(this.categories);
  }

  applyFilters() {
    const filtro: ProductFilter = {
      category: this.selectedCategory,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice
    };

    this.listProducts = this._productServiceService.filtrarProducts(this.listProductsTodos, filtro);
  }



}
