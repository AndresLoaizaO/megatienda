import { Routes } from '@angular/router';
import { ProductCatalogComponent } from './modules/products/product-catalog/product-catalog.component';

export const routes: Routes = [
  //{ path: '', component: HomeComponent },       // ruta raíz
  //{ path: 'about', component: AboutComponent }, // ruta /about
  { path: 'catalogo', component: ProductCatalogComponent },       // ruta del catalogo
  { path: '**', redirectTo: '' }                // ruta por defecto (404)
];

