export abstract class RoutesUtils {
	/*
	 * ========================================
	 *           ROUTES - HOME
	 * =======================================*/
	static readonly HOME: string = '/home';

	/*
	 * ========================================
	 *           ROUTES - AUTH
	 * =======================================*/

	static readonly AUTH: string = '/auth';
	static readonly SIGN_IN: string = this.AUTH + '/sign-in';
	/*
	 * ========================================
	 *           ROUTES - DASHBOARD
	 * =======================================*/
	static readonly DASHBOARD: string = '/dashboard';
	static readonly DASH_HOME: string = this.DASHBOARD + '/home';
	static readonly DASH_COUNTRIES: string = this.DASHBOARD + '/countries';
}
