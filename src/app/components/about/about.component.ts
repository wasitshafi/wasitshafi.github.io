import { Component } from '@angular/core';

import { Constants } from '@shared';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: [
		'./about.component.scss',
		'./about-shared.component.scss',
		'./about-responsive.component.scss',
	],
})
export class AboutComponent {
	constructor(
		public constants: Constants,
		public userProfileService: UserProfileService
	) {}
}
