import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { environment } from '../../src/environments/environment';
import { ICountry } from '@shared/models/country.model';
import { CountryService } from '../../src/app/shared/services/country.service';

describe('CountryService', () => {
	let service: CountryService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [CountryService]
		});
		service = TestBed.inject(CountryService);
		httpMock = TestBed.inject(HttpTestingController);
	});
	afterEach(() => {
		httpMock.verify();
	});

	it('should get list of countries', () => {
		const mockResponse: ICountry[] = [];

		service.getCountries().subscribe((countries) => {
			expect(countries).toEqual(mockResponse);
		});

		const req = httpMock.expectOne(`${environment.apiUrlRestCountry}/all`);
		expect(req.request.method).toBe('GET');
		req.flush(mockResponse);
	});
});
