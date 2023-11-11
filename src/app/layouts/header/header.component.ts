import { Component } from '@angular/core';

import { Constants } from '@shared';

import { AppDataService } from '@services';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [
		'./header.component.scss',
		'./header-shared.component.scss',
		'./header-responsive.component.scss',
	],
})
export class HeaderComponent {
	constructor(
		public appDataService: AppDataService,
		public constants: Constants
	) {}
}
