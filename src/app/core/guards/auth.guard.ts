import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '@shared/services/token.service';
import { RoutesUtils } from '@utils/library/routes.util';

export const authGuard: CanActivateFn = (): boolean => {
	const tokenService = inject(TokenService);
	const router = inject(Router);
	console.log('Token ==> ', tokenService.isCheckToken(tokenService.getToken()));
	if (!tokenService.isCheckToken(tokenService.getToken())) {
		router.navigate([RoutesUtils.AUTH]).then();
		return false;
	}
	return true;
};
