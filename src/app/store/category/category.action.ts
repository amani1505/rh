import { CreateCategoryDto } from '@dtos/category/create-category.dto';
import { UpdateCategoryDto } from '@dtos/category/update-category.dto';
import { CategoryInterface } from '@model/category.interface';
import { createAction, props } from '@ngrx/store';

//  CREATE
export const invoke_save_new_category_api = createAction(
  '[Category API] Invoke save new Category  api',
  props<{ new_category: any }>(),
);

export const save_category_api_success = createAction(
  '[Category API] save new Category API Success',
  props<{ new_category: any }>(),
);

//  READ
export const invoke_category_api = createAction(
  '[Category API] Invoke Fetch Category API',
);

export const category_fetch_api_success = createAction(
  '[Category API] Fetch Category API Success',
  props<{ all_categories: CategoryInterface[] }>(),
);

// UPDATE
export const invoke_update_category_api = createAction(
  '[Category API] Inovke update Category api',
  props<{ id: string; update_category: any }>(),
);

export const update_category_api_sucess = createAction(
  '[Category API] update Category success',
  props<{ update_category: any }>(),
);

// DELETE
export const invoke_delete_category_api = createAction(
  '[Category API] Invoke delete Category api',
  props<{ id: string }>(),
);

export const delete_category_success = createAction(
  '[Category API] deleted Category api success',
  props<{ id: string }>(),
);
