import { Routes } from '@angular/router';
import { DahboardLayputComponent } from './layout/dahboard-layput/dahboard-layput.component';

export const dashboardRoutes: Routes = [
	{
		path: '',
		component: DahboardLayputComponent,
		children: [
			{
				path: 'home',
				loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)
			},
			{
				path: 'countries',
				loadComponent: () => import('./pages/countries/countries.component').then((c) => c.CountriesComponent)
			},
			{
				path: 'countries/details',
				loadComponent: () =>
					import('./pages/detail-country/detail-country.component').then((c) => c.DetailCountryComponent)
			},
			{
				path: '**',
				redirectTo: 'home',
				pathMatch: 'full'
			}
		]
	}
];
