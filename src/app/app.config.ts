import { ApplicationConfig, enableProdMode, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

if (environment.production) {
	enableProdMode();
}

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes), importProvidersFrom(BrowserModule, BrowserAnimationsModule, HttpClientModule)]
};
