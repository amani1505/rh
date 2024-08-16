import { Routes } from '@angular/router';
import { LandingComponent } from './landing.component';

export default [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.routes'),
  },
] as Routes;
