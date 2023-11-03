import { Component } from '@angular/core';

import { Constants } from '@shared';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: [
		'./contact.component.scss',
		'./contact-shared.component.scss',
		'./contact-responsive.component.scss',
	],
})
export class ContactComponent {
	public contactDetails: any;

	constructor(
		public constants: Constants,
		public userProfileService: UserProfileService
	) {
		this.contactDetails = this.userProfileService.portfolioData$.subscribe(
			(data) => {
				if (data?.contactDetails) {
					this.contactDetails = data.contactDetails;
				}
			}
		);
	}
}
