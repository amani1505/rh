import { AppStateInterface } from '@model/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAppState =
  createFeatureSelector<AppStateInterface>('app_state');

// export const selectAppState = createSelector(() => undefined, (state) => state.appState);
