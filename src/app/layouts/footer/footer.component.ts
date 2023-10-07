import { Component } from '@angular/core';

import { Constants } from '@shared/constants';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: [
		'./footer.component.scss',
		'./footer-common.component.scss',
		'./footer-responsive.component.scss',
	],
})
export class FooterComponent {
	constructor(
		public constants: Constants,
		public userProfileService: UserProfileService
	) {}
}
