import { ActionReducerMap } from '@ngrx/store';
import { category_reducer } from '../../store/category/category.reducer';
import { app_reducer } from './app.reducer';

export const reducers: ActionReducerMap<any> = {
  app_state: app_reducer,
  categories: category_reducer,
};

