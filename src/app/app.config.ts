import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { environment } from '@environments/environment';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';

// if (environment.production) {
// 	enableProdMode();
// }
export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		importProvidersFrom(
			provideFirebaseApp(() => initializeApp(environment.firebase)),
			provideAuth(() => getAuth()),
			provideFirestore(() => {
				return getFirestore();
			}),
			MatSnackBarModule,
			BrowserAnimationsModule,
			BrowserModule,
			HttpClientModule,
			InfiniteScrollModule
		),
		provideAnimations()
		// {
		// 	provide: IMAGE_LOADER,
		// 	useValue: (config: ImageLoaderConfig) => {
		// 		return `https://flagcdn.com/${config.src}`;
		// 	}
		// }
	]
};
