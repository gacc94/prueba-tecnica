import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '@shared/services/country.service';
import { Router } from '@angular/router';
import { ICountry } from '@shared/models/country.model';
import { MatCardModule } from '@angular/material/card';
import { RoutesUtils } from '@utils/library/routes.util';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'gac-countries',
	standalone: true,
	imports: [CommonModule, MatCardModule, MatButtonModule],
	templateUrl: './countries.component.html',
	styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
	private readonly countryService = inject(CountryService);
	private readonly router: Router = inject(Router);
	countries: ICountry[] = [];

	ngOnInit(): void {
		this.countryService.getCountries().subscribe({
			next: (countries) => {
				this.countries = countries;
			}
		});
	}
	onDetails(country: ICountry): void {
		this.router.navigateByUrl(`${RoutesUtils.DASH_COUNTRIES}/details`, { state: { country } }).then();
	}
}
