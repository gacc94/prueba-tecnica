import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '@environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { Auth, getAuth, provideAuth } from '@angular/fire/auth';
import { Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// if (environment.production) {
// 	enableProdMode();
// }
export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		importProvidersFrom(
			provideFirebaseApp(() =>
				initializeApp({
					apiKey: 'AIzaSyAp8gtJ7TLUmmUWETVW4HNVdWNRnBq3m08',
					authDomain: 'prueba-tecnica-10pearls.firebaseapp.com',
					projectId: 'prueba-tecnica-10pearls',
					storageBucket: 'prueba-tecnica-10pearls.appspot.com',
					messagingSenderId: '323275965653',
					appId: '1:323275965653:web:cb2e9feae0dbab4e500e5c'
				})
			),
			provideAuth(() => getAuth()),
			provideFirestore(() => {
				return getFirestore();
			}),
			MatSnackBarModule,
			BrowserAnimationsModule,
			BrowserModule,
			HttpClientModule
		),
		provideAnimations()
	]
};
