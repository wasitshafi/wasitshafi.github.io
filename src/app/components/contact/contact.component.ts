import { Component } from '@angular/core';

import { Constants } from '@common';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: [
		'./contact.component.scss',
		'./contact-common.component.scss',
		'./contact-responsive.component.scss',
	],
})
export class ContactComponent {
	constructor(
		public constants: Constants,
		public userProfileService: UserProfileService
	) {}
}
