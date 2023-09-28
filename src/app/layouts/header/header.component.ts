import { Component } from '@angular/core';

import { Constants } from '@common';

import { AppDataService } from '@services';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	constructor(
		public appDataService: AppDataService,
		public constants: Constants
	) {}

	handleThemeModeChange() {
		document.body.classList.toggle(this.constants.STYLE_PREFIX + 'dark-theme');
		this.appDataService.toggleCurrentThemeMode();
	}
}
