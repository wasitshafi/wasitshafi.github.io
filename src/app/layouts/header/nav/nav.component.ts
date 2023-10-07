import { Component } from '@angular/core';

import { Constants } from '@shared/constants';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: [
		'./nav.component.scss',
		'./nav-common.component.scss',
		'./nav-responsive.component.scss',
	],
})
export class NavComponent {
	public constructor(
		public constants: Constants,
		public userProfileService: UserProfileService
	) {}
}
