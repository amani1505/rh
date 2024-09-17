import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>,
): ActionReducer<any> {
  return (state, action) => {
    const nextState = reducer(state, action);
    console.log('Current Action:', action);
    console.log('Next State before Sync:', nextState); // Check if this is showing as expected

    const syncedReducer = localStorageSync({
      keys: ['categories'], // Ensure 'categories' matches your feature slice name
      rehydrate: true,
      storage: window.sessionStorage,
      removeOnUndefined: true,
    })(reducer);

    const finalState = syncedReducer(nextState, action);
    console.log('Persisted State to localStorage:', finalState);
    return finalState;
  };
}

export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
];
