import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { CardComponent } from '../../components/card/card.component';

@Component({
	selector: 'gac-home',
	standalone: true,
	imports: [CommonModule, MatGridListModule, CardComponent],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	private breakpointObserver: BreakpointObserver = inject(BreakpointObserver);

	/** Based on the screen size, switch from standard to one column per row */
	public cardLayout: Observable<any> = new Observable<any>();

	ngOnInit(): void {
		this.cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
			map(({ matches }) => {
				if (matches) {
					return {
						columns: 1,
						miniCard: { cols: 1, rows: 1 },
						chart: { cols: 1, rows: 2 },
						table: { cols: 1, rows: 4 }
					};
				}

				return {
					columns: 4,
					miniCard: { cols: 1, rows: 1 },
					chart: { cols: 2, rows: 2 },
					table: { cols: 4, rows: 4 }
				};
			})
		);
	}
}
