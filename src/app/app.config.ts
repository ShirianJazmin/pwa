//import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
//import { provideRouter } from '@angular/router';
//import { routes } from './app.routes';
//import { environment } from '../environments/environment';

//export const appConfig: ApplicationConfig = {
  //providers: [
    //provideZoneChangeDetection({ eventCoalescing: true }),
    //provideRouter(routes)
  //]
//};
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(CommonModule, ReactiveFormsModule),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ]
};


