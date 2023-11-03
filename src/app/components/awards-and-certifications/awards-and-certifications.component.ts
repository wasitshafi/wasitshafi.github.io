import { Component } from '@angular/core';

import { Constants } from '@shared';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-awards-and-certifications',
	templateUrl: './awards-and-certifications.component.html',
	styleUrls: [
		'./awards-and-certifications.component.scss',
		'./awards-and-certifications-shared.component.scss',
		'./awards-and-certifications-responsive.component.scss',
	],
})
export class AwardsAndCertificationsComponent {
	public awardsAndCertifications: any = {};

	constructor(
		public constants: Constants,
		public userProfileService: UserProfileService
	) {
		this.userProfileService.portfolioData$.subscribe((data) => {
			if (data?.awardsAndCertifications) {
				this.awardsAndCertifications = data.awardsAndCertifications;
			}
		});
	}
}
