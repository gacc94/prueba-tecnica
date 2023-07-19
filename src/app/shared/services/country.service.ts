import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { ICountry } from '@shared/models/country.model';

@Injectable({
	providedIn: 'root'
})
export class CountryService {
	private readonly http: HttpClient = inject(HttpClient);
	private API_URL = environment.apiUrlRestCountry;

	getCountries(): Observable<ICountry[]> {
		return this.http.get<ICountry[]>(`${this.API_URL}/all`);
	}

	getCountryByName(name: string): Observable<any> {
		return this.http.get(`${this.API_URL}/name/${name}`);
	}
}
