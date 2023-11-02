import { Component } from '@angular/core';

import { Constants } from '@shared/constants';

import { UserProfileService, AppDataService } from '@services';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: [
		'./nav.component.scss',
		'./nav-shared.component.scss',
		'./nav-responsive.component.scss',
	],
})
export class NavComponent {
	public constructor(
		public appDataService: AppDataService,
		public constants: Constants,
		public userProfileService: UserProfileService
	) {}
}
