import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCatalogComponent} from './modules/products/product-catalog/product-catalog.component';



@NgModule({
  declarations: [
    ProductCatalogComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
