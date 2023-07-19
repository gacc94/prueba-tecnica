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
				path: '**',
				redirectTo: 'home',
				pathMatch: 'full'
			}
		]
	}
];
