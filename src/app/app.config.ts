import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { EffectsModule } from '@ngrx/effects';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { app_reducer } from './shared/store/app.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { metaReducers } from './shared/store/localStoragePersistance';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      AngularSvgIconModule.forRoot(),

      StoreModule.forRoot(app_reducer, { metaReducers }),

      EffectsModule.forRoot(),
    ),
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimationsAsync(),
    provideClientHydration(),
  ],
};
