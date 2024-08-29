import { createReducer, on } from '@ngrx/store';

import { set_api_status } from './app.action';
import { AppStateInterface } from '@model/app-state';

export const intialState: Readonly<AppStateInterface> = {
  api_response_message: '',
  api_status: '',
};

export const app_reducer = createReducer(
  intialState,
  on(set_api_status, (state, { api_status }) => {
    return {
      ...state,
      ...api_status,
    };
  }),
);
