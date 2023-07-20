import { Component, HostListener, inject, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CountryService } from '@shared/services/country.service';
import { Router } from '@angular/router';
import { ICountry } from '@shared/models/country.model';
import { MatCardModule } from '@angular/material/card';
import { RoutesUtils } from '@utils/library/routes.util';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
	selector: 'gac-countries',
	standalone: true,
	imports: [
		CommonModule,
		InfiniteScrollModule,
		MatCardModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatIconModule,
		NgOptimizedImage
	],
	templateUrl: './countries.component.html',
	styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
	private readonly countryService = inject(CountryService);
	private readonly router: Router = inject(Router);
	isVisibleButton = false;
	@HostListener('window:scroll') onWindowScroll(): void {
		const yOffSet = window.scrollY;
		const scrollTop = document.documentElement.scrollTop;
		this.isVisibleButton = yOffSet > 300 || scrollTop > 300;
	}
	countries: ICountry[] = [];
	onScrollTop(): void {
		document.documentElement.scrollTop = 0;
	}
	onScrollDown(): void {
		console.log('Down!!');
	}
	ngOnInit(): void {
		this.countryService.getCountries().subscribe({
			next: (countries) => {
				console.log(countries);
				this.countries = countries;
			}
		});
	}
	onDetails(country: ICountry): void {
		this.router.navigateByUrl(`${RoutesUtils.DASH_COUNTRIES}/details`, { state: { country } }).then();
	}
}
