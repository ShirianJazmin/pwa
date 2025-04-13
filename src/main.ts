import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { provideIndexedDb, DBConfig } from 'ngx-indexed-db';
import { provideHttpClient } from '@angular/common/http';

const dbConfig: DBConfig = {
  name: 'ToDoDB',
  version: 1,
  objectStoresMeta: [{
    store: 'todos',  // EZT HASZNÁLJUK
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'cim', keypath: 'cim', options: { unique: false } },
      { name: 'leiras', keypath: 'leiras', options: { unique: false } },
      { name: 'completed', keypath: 'completed', options: { unique: false } }
    ]
  }]
};

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideIndexedDb(dbConfig),
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ]
});
