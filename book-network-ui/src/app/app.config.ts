// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideHttpClient } from '@angular/common/http';

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     provideHttpClient()
//   ]
// };


import { ApplicationConfig } from '@angular/core';

import { provideRouter } from '@angular/router';

import {
  provideHttpClient,
  withInterceptorsFromDi,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

import { routes } from './app.routes';

import { HttpTokenInterceptor } from './services/interceptor/http-token-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [

    provideRouter(routes),

    provideHttpClient(
      withInterceptorsFromDi()
    ),

    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    }

  ]
};