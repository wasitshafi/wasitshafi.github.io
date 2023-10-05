import { Component } from '@angular/core';

import { Constants } from '@common/constants';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-work-experience',
	templateUrl: './work-experience.component.html',
	styleUrls: [
		'./work-experience.component.scss',
		'./work-experience-common.component.scss',
		'./work-experience-responsive.component.scss',
	],
})
export class WorkExperienceComponent {
	public workExperience: any;

	constructor(
		public constants: Constants,
		public userProfileService: UserProfileService
	) {
		// subscribe to  portfolioData behavior subject for work experience data
		this.userProfileService.portfolioData$.subscribe((data) => {
			if (data?.workExperience) {
				this.workExperience = data.workExperience;
			}
		});
	}
}
