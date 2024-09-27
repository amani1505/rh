import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { CategoryEffect } from 'app/store/category/category.effect';
import { category_reducer } from 'app/store/category/category.reducer';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./product.component').then((m) => m.ProductComponent),
  },
  {
    path: 'add-new',
    loadComponent: () =>
      import('./add-product/add-product.component').then(
        (m) => m.AddProductComponent
      ),
  },
  {
    path: 'category',
    loadChildren: () => import('./product-category/product-category.routes'),
    providers: [
      provideEffects(CategoryEffect),
      provideState({ name: 'categories', reducer: category_reducer }),
    ],
  },
] as Routes;
