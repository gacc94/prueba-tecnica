import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '@shared/services/token.service';
import { IAuth } from '@shared/models/auth.model';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private URL = `${environment.apiUrl}/auth`;
	private http = inject(HttpClient);
	private readonly tokenService = inject(TokenService);

	signIn(email: string, password: string): Observable<IAuth> {
		const body = { email, password };
		return this.http.post<IAuth>(`${this.URL}/login`, body).pipe(
			tap(({ access_token }: IAuth) => {
				this.tokenService.saveToken(access_token);
			}),
			catchError(this.handleError)
		);
	}

	private handleError(err: any): Observable<never> {
		// return of({} as T);
		return throwError(() => err);
	}
}
