import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { authGuard } from './core/guards/auth.guard';
import { ProductCatalogComponent } from './modules/products/product-catalog/product-catalog.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  { path: 'auth/login', component: LoginComponent },
  { path: 'catalogo', component: ProductCatalogComponent }, // ruta del catalogo

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },

  { path: 'auth/register', component: RegisterComponent },
  {
    path: 'cart',
    loadComponent: () =>
      import('./modules/cart/cart/cart.component').then((m) => m.CartComponent),
  },
];
