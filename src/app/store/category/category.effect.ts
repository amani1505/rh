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
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { set_api_status } from 'app/shared/store/app.action';
import { select_categories } from './category.selector';

@Injectable()
export class CategoryEffect {
  // role:string
  // instituteId:string
  constructor(
    private _actions$: Actions,
    private _categoryService: CategoryService,
    private _store: Store,
    private _appStore: Store<AppStateInterface>,
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
      mergeMap(([, category_fron_store]) => {
        if (category_fron_store.length > 0) {
          return EMPTY;
        }
        return this._categoryService.getAll().pipe(
          map((data) => {
            return category_fetch_api_success({ all_categories: data });
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
      switchMap((actions) => {
        this._appStore.dispatch(
          set_api_status({
            api_status: { api_response_message: '', api_status: '' },
          }),
        );
        return this._categoryService.delete(actions.id).pipe(
          map(() => {
            this._appStore.dispatch(
              set_api_status({
                api_status: { api_response_message: '', api_status: 'success' },
              }),
            );
            return delete_category_success({ id: actions.id });
          }),
        );
      }),
    );
  });
}
