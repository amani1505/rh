import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@landing/landing.routes'),
  },
  {
    path: 'admin',
    loadChildren: () => import('@layout/layout.routes'),
  },
  {
    path: 'auth',
    loadChildren: () => import('@auth/auth.routes'),
  },
  //   { path: '**', redirectTo: 'error/404' },
];
