import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

export default [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    loadComponent: () =>
      import('../product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent,
      ),
  },
] as Routes;
