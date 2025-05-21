import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { isDevMode, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { provideIndexedDb, DBConfig } from 'ngx-indexed-db';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from './environments/environment';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const dbConfig: DBConfig = {
  name: 'ToDoDB',
  version: 1,
  objectStoresMeta: [{
    store: 'todos',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'cim', keypath: 'cim', options: { unique: false } },
      { name: 'leiras', keypath: 'leiras', options: { unique: false } },
      { name: 'datum', keypath: 'datum', options: { unique: false } },
      { name: 'completed', keypath: 'completed', options: { unique: false } }
    ]
  }]
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(CommonModule, ReactiveFormsModule),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideIndexedDb(dbConfig),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ]
}).catch(err => console.error(err));
