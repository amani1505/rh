import { CategoryInterface } from '@model/category.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const select_categories =
  createFeatureSelector<CategoryInterface[]>('categories');

export const select_category_by_id = (category_by_id: string) =>
  createSelector(select_categories, (category: CategoryInterface[]) => {
    var category_id = category.filter((_) => _.id == category_by_id);
    if (category_id.length == 0) {
      return null;
    }
    return category_id[0];
  });
