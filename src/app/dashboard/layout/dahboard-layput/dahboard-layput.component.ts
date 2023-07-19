import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'gac-dahboard-layput',
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	templateUrl: './dahboard-layput.component.html',
	styleUrls: ['./dahboard-layput.component.scss']
})
export class DahboardLayputComponent {}
