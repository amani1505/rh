import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadChildren: () => import('./pages/product/product.routes'),
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.routes'),
  },

] as Routes;
