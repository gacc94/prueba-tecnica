import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConstantsUtil } from '../../../utils/library/constants.util';

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
		MatSnackBarModule
	],
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
	form!: FormGroup;
	constructor(private readonly fb: FormBuilder) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			email: ['', [Validators.required, Validators.pattern(ConstantsUtil.PATTERN_EMAIL)]],
			password: ['', [Validators.required, Validators.minLength(5)]]
		});
	}
	onSubmit(): void {
		console.log('');
	}
	errorMessage(field: string): string {
		const control: AbstractControl = this.form.controls[field];
		let msg = '';
		if (control.hasError('required')) {
			msg = ConstantsUtil.REQUIRED;
		} else if (control.hasError('minlength')) {
			msg = ConstantsUtil.MIN_LENGTH;
		}
		return msg;
	}
	hasError(field: string): boolean {
		const control: AbstractControl = this.form.controls[field];
		return (control.touched || control.dirty) && !control.valid;
	}
}
