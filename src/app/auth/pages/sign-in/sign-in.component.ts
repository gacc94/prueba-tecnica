import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConstantsUtil } from '@utils/library/constants.util';
import { AuthService } from '@shared/services/auth.service';
import { RoutesUtils } from '@utils/library/routes.util';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
	selector: 'gac-sign-in',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		ReactiveFormsModule,
		RouterLink,
		MatSnackBarModule,
		LoaderComponent
	],
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
	private readonly fb: FormBuilder = inject(FormBuilder);
	private readonly authService: AuthService = inject(AuthService);
	private readonly router: Router = inject(Router);
	form!: FormGroup;
	hide = true;
	isLoading = false;

	ngOnInit(): void {
		this.form = this.fb.group({
			email: ['', [Validators.required, Validators.pattern(ConstantsUtil.PATTERN_EMAIL)]],
			password: ['', [Validators.required, Validators.minLength(5)]]
		});
	}

	onSubmit(): void {
		if (!this.form.valid) {
			this.form.markAllAsTouched();
			return;
		}
		const { email, password } = this.form.value;
		this.isLoading = true;
		this.authService.signIn(email, password).subscribe({
			next: (value) => {
				if (value) {
					this.isLoading = false;
					this.router.navigate([RoutesUtils.DASHBOARD]).then();
				}
			},
			error: (err) => {
				console.log(err);
				this.isLoading = false;
			}
		});
	}

	errorMessage(field: string): string {
		const control: AbstractControl = this.form.controls[field];
		let msg = '';
		if (control.hasError('required')) {
			msg = ConstantsUtil.REQUIRED;
		} else if (control.hasError('minlength')) {
			msg = ConstantsUtil.MIN_LENGTH;
		} else if (control.hasError('pattern')) {
			msg = ConstantsUtil.EMAIL;
		}
		return msg;
	}

	hasError(field: string): boolean {
		const control: AbstractControl = this.form.controls[field];
		return (control.touched || control.dirty) && !control.valid;
	}
}
