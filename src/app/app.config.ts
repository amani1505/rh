import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { app_reducer } from './shared/store/app.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      AngularSvgIconModule.forRoot(),
      StoreModule.forRoot(app_reducer),

      EffectsModule.forRoot([]),
    ),
    provideAnimations(),
    provideHttpClient(),
    provideEffects(),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideAnimationsAsync(),
  ],
};
