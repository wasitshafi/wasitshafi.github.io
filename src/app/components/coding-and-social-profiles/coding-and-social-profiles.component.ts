import { Component } from '@angular/core';

import { Constants } from '@common';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-coding-and-social-profiles',
	templateUrl: './coding-and-social-profiles.component.html',
	styleUrls: [
		'./coding-and-social-profiles.component.scss',
		'./coding-and-social-profiles-common.component.scss',
		'./coding-and-social-profiles-responsive.component.scss',
	],
})
export class CodingAndSocialProfilesComponent {
	public codingAndSocialProfiles: any;

	constructor(
		public constants: Constants,
		public userProfileService: UserProfileService
	) {
		this.codingAndSocialProfiles =
			this.userProfileService.portfolioData$.subscribe((data) => {
				if (data?.codingAndSocialProfiles) {
					this.codingAndSocialProfiles = data.codingAndSocialProfiles;
				}
			});
	}
}
