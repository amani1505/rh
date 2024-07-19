import { Routes } from '@angular/router';

export const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () =>
//       import('./modules/layout/layout.module').then((m) => m.LayoutModule),
//   },
  {
    path: 'auth',
    loadChildren: () =>
      import('@auth/auth.routes'),
  },
//   { path: '**', redirectTo: 'error/404' },
];
