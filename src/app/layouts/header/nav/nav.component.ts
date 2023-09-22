import { Component } from '@angular/core';

import { Constants } from '@common/constants';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
	public constructor(public constants: Constants) {}

	public handleNavItemClick(event: any) {
		document.querySelectorAll('.nav-link')?.forEach((nativeElement) => {
			console.log('native Element :: ', nativeElement);
			nativeElement.classList.remove('active');
		});

		event.target.classList.add('active');
	}
}
