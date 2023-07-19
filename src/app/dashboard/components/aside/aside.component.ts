import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RoutesUtils } from '@utils/library/routes.util';

@Component({
	selector: 'gac-aside',
	standalone: true,
	imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule, RouterLinkActive, RouterLink],
	templateUrl: './aside.component.html',
	styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
	private readonly router = inject(Router);
	notes: any[] = [
		{
			name: 'Vacation Itinerary',
			updated: new Date('2/20/16')
		},
		{
			name: 'Kitchen Remodel',
			updated: new Date('1/18/16')
		}
	];
	goToHome(evt: Event): void {
		this.router.navigate([RoutesUtils.DASH_HOME]).then();
	}
	goToCountries(): string {
		return RoutesUtils.DASH_COUNTRIES;
	}

	protected readonly RoutesUtils = RoutesUtils;
}
