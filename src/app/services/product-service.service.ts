import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products : Product[]=[]
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>('assets/data/listProducts.json');
  }

  // Filtrar productos en memoria
  filtrarProducts(products: Product[], filtro: { category?: string | null; minPrice?: number | null; maxPrice?: number | null }): Product[] {
    return products.filter(product => {
      const cumpleCategoria = filtro.category ? product.category === filtro.category : true;
      const cumpleMinPrice = filtro.minPrice != null ? product.price! >= filtro.minPrice : true;
      const cumpleMaxPrice = filtro.maxPrice != null ? product.price! <= filtro.maxPrice : true;
      return cumpleCategoria && cumpleMinPrice && cumpleMaxPrice;
    });
  }


}
