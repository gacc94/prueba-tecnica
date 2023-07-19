import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { ConstantsUtil } from '@utils/library/constants.util';

@Injectable({
	providedIn: 'root'
})
export class TokenService {
	private readonly lsService = inject(LocalStorageService);

	saveToken(token: string): void {
		this.lsService.set(ConstantsUtil.TOKEN, token);
	}

	getToken(): any {
		return this.lsService.get(ConstantsUtil.TOKEN);
	}

	removeToken(): void {
		this.lsService.remove(ConstantsUtil.TOKEN);
	}

	isCheckToken(token: string): boolean {
		return Boolean(token);
	}
}
