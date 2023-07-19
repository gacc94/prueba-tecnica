import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay, tap } from 'rxjs';
import { AsideComponent } from '../../components/aside/aside.component';

@Component({
	selector: 'gac-dahboard-layput',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		MatSidenavModule,
		MatToolbarModule,
		MatSlideToggleModule,
		MatIconModule,
		MatButtonModule,
		AsideComponent
	],
	templateUrl: './dahboard-layput.component.html',
	styleUrls: ['./dahboard-layput.component.scss']
})
export class DahboardLayputComponent {
	private breakpointObserver: BreakpointObserver = inject(BreakpointObserver);
	isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall]).pipe(
		tap(console.log),
		map((result) => result.matches),
		shareReplay(),
		tap(console.log)
	);
}
