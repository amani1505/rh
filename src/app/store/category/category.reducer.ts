import { CategoryInterface } from '@model/category.interface';
import { createReducer, on } from '@ngrx/store';
import {
  category_fetch_api_success,
  delete_category_success,
  save_category_api_success,
  update_category_api_sucess,
} from './category.action';

export const category_initial_state: ReadonlyArray<CategoryInterface> = [];

export const category_reducer = createReducer(
  category_initial_state,
  on(save_category_api_success, (state, { new_category }) => {
    let new_state = [...state];
    new_state.unshift(new_category);
    return new_state;
  }),
  on(category_fetch_api_success, (state, { all_categories }) => {
    return all_categories;
  }),
  on(update_category_api_sucess, (state, { update_category }) => {
    let new_state = state.filter((_) => _.id != update_category.id);
    new_state.unshift(update_category);
    return new_state;
  }),
  on(delete_category_success, (state, { id }) => {
    let new_state = state.filter((_) => _.id != id);

    return new_state;
  }),
);
