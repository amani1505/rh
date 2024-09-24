import { Injectable } from '@angular/core';
import { AppStateInterface } from '@model/app-state';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { CategoryService } from '@services/category.service';
import {
  category_fetch_api_success,
  delete_category_success,
  invoke_category_api,
  invoke_delete_category_api,
  invoke_save_new_category_api,
  invoke_update_category_api,
  save_category_api_success,
  update_category_api_sucess,
} from './category.action';
import { catchError, EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { set_api_status } from 'app/shared/store/app.action';
import { select_categories } from './category.selector';
import { ToastService } from '@services/toast.service';

@Injectable()
export class CategoryEffect {
  // role:string
  // instituteId:string
  constructor(
    private _actions$: Actions,
    private _categoryService: CategoryService,
    private _store: Store,
    private _appStore: Store<AppStateInterface>,
    private _toast: ToastService,

  ) {}

  save$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(invoke_save_new_category_api),
      switchMap((action) => {
        this._appStore.dispatch(
          set_api_status({
            api_status: { api_response_message: '', api_status: '' },
          }),
        );
        return this._categoryService.create(action.new_category).pipe(
          map((data) => {
            this._appStore.dispatch(
              set_api_status({
                api_status: { api_response_message: '', api_status: 'success' },
              }),
            );
            return save_category_api_success({ new_category: data });
          }),
        );
      }),
    );
  });

  loadAll$ = createEffect(() =>
    this._actions$.pipe(
      ofType(invoke_category_api),
      withLatestFrom(this._store.pipe(select(select_categories))),
      mergeMap(([action, category_from_store]) => {
        if (category_from_store.data.length < 0) {
          return EMPTY;
        }
        return this._categoryService
          .getAll({
            page: action.page,
            limit: action.limit || 10,
            search: '',
            sortOrder: action.sortOrder || 'ASC',
            relations: [],
          })
          .pipe(
            map((response) => {
              return category_fetch_api_success({
                all_categories: response.data,
                current_page: response.current_page,
                total_pages: response.total_pages,
                total_items: response.total_items,
              });
            }),
          );
      }),
    ),
  );

  update$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(invoke_update_category_api),
      switchMap((action) => {
        this._appStore.dispatch(
          set_api_status({
            api_status: { api_response_message: '', api_status: '' },
          }),
        );
        return this._categoryService
          .update(action.id, action.update_category)
          .pipe(
            map((data) => {
              this._appStore.dispatch(
                set_api_status({
                  api_status: {
                    api_response_message: '',
                    api_status: 'success',
                  },
                }),
              );
              return update_category_api_sucess({
                update_category: data,
              });
            }),
          );
      }),
    );
  });

  delete$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(invoke_delete_category_api),
      switchMap(action => {
        this._appStore.dispatch(set_api_status({
          api_status: { api_response_message: '', api_status: '' },
        }));
        return this._categoryService.delete(action.id).pipe(
          map(() => {
            this._toast.success('Category deleted successfully!'); 
            this._appStore.dispatch(set_api_status({
              api_status: { api_response_message: '', api_status: 'success' },
            }));
            return delete_category_success({ id: action.id });
          }),
          catchError(error => {
            this._toast.error(error.message); // Show error toast
            this._appStore.dispatch(set_api_status({
              api_status: { api_response_message: 'Failed to delete category', api_status: 'error' },
            }));
            return EMPTY; // Or handle this as needed
          })
        );
      }),
    );
  });
}