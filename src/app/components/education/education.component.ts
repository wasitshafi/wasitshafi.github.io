import { Component } from '@angular/core';

import { Constants } from '@shared';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-education',
	templateUrl: './education.component.html',
	styleUrls: [
		'./education.component.scss',
		'./education-common.component.scss',
		'./education-responsive.component.scss',
	],
})
export class EducationComponent {
	public education: any;

	constructor(
		public constants: Constants,
		public userProfileService: UserProfileService
	) {
		this.education = this.userProfileService.portfolioData$.subscribe(
			(data) => {
				if (data?.education) {
					this.education = data.education;
				}
			}
		);
	}
}
