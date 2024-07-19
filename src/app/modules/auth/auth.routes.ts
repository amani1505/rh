import { Routes } from '@angular/router';

export default [
  {
    path: 'forget-password',
    loadChildren: () =>
      import('@auth/pages/forget-password/forget-password.routes'),
  },
] as Routes;
