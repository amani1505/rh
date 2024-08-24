import { Routes } from '@angular/router';

export default [
  {
    path: 'category',
    loadChildren: () =>
      import('./pages/product-category/product-category.routes'),
  },
] as Routes;
