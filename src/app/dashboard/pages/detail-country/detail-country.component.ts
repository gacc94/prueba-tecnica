import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ICountry } from '@shared/models/country.model';

@Component({
	selector: 'gac-detail-country',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './detail-country.component.html',
	styleUrls: ['./detail-country.component.scss']
})
export class DetailCountryComponent implements OnInit {
	private _location: Location = inject(Location);
	country!: ICountry;

	ngOnInit(): void {
		this.country = (this._location.getState() as any).country;
	}
}
