import { CategoryInterface } from '@model/category.interface';
import { createReducer, on } from '@ngrx/store';
import {
  category_fetch_api_success,
  delete_category_success,
  save_category_api_success,
  update_category_api_sucess,
} from './category.action';

export const category_initial_state: CategoryInterface = {
  data: [],
  limit: 1,
  current_page: 1,
  total_pages: 1,
  total_items: 1,
};

export const category_reducer = createReducer(
  category_initial_state,
  on(save_category_api_success, (state, { new_category }) => {
    let new_data = [...state.data];
    new_data.unshift(new_category);
    return { ...state, data: new_data };
  }),
  on(
    category_fetch_api_success,
    (state, { all_categories, current_page, total_pages, total_items }) => {
      return {
        ...state,
        data: all_categories,
        current_page: current_page,
        total_pages: total_pages,
        total_items: total_items,
      };
    },
  ),
  on(update_category_api_sucess, (state, { update_category }) => {
    let new_data = state.data.filter((_) => _.id != update_category.id);
    new_data.unshift(update_category);
    return { ...state, data: new_data };
  }),
  on(delete_category_success, (state, { id }) => {
    let new_data = state.data.filter((category) => category.id !== id);
    return { ...state, data: new_data };
  }),
);
