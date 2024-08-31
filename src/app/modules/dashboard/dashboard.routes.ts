import { Routes } from '@angular/router';

export default [
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.routes'),
  },
] as Routes;
