import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCatalogComponent} from './products/product-catalog/product-catalog.component';
import {ProductViewComponent} from './products/product-view/product-view.component';



@NgModule({
  declarations: [
    ProductCatalogComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCatalogComponent,
    ProductViewComponent
  ]

})
export class ModulesModule { }
