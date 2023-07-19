import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RoutesUtils } from '@utils/library/routes.util';
import { TokenService } from '@shared/services/token.service';

@Component({
	selector: 'gac-aside',
	standalone: true,
	imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule, RouterLinkActive, RouterLink],
	templateUrl: './aside.component.html',
	styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
	private readonly router = inject(Router);
	private readonly tokenService = inject(TokenService);
	goToAuth(evt: Event): void {
		console.log(evt);
		this.router.navigate([RoutesUtils.AUTH]).then((res) => {
			console.log(res);
			this.tokenService.removeToken();
		});
	}
	protected readonly RoutesUtils = RoutesUtils;
}
