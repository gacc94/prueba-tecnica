import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes)
	},
	{
		path: 'dashboard',
		canActivate: [authGuard],
		loadChildren: () => import('./dashboard/dashboard.routes').then((r) => r.dashboardRoutes)
	},
	{
		path: '**',
		redirectTo: 'auth',
		pathMatch: 'full'
	}
];
