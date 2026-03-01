import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importaciones de los componentes según tu estructura de carpetas
import { ProductCatalogComponent } from './products/product-catalog/product-catalog.component';
import { ProductViewComponent } from './products/product-view/product-view.component';

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
