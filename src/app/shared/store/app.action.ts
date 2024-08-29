import { AppStateInterface } from '@model/app-state';
import { createAction, props } from '@ngrx/store';

export const set_api_status = createAction(
  '[API] sucess or Failure status',
  props<{ api_status: AppStateInterface }>(),
);
