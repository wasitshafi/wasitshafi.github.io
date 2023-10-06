import { Component } from '@angular/core';

import { Constants } from '@common';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-personal-projects',
	templateUrl: './personal-projects.component.html',
	styleUrls: [
		'./personal-projects.component.scss',
		'./personal-projects-common.component.scss',
		'./personal-projects-responsive.component.scss',
	],
})
export class PersonalProjectsComponent {
	public personalProjects: any;

	constructor(
		public constants: Constants,
		public userProfileService: UserProfileService
	) {
		this.personalProjects = this.userProfileService.portfolioData$.subscribe(
			(data) => {
				if (data?.personalProjects) {
					this.personalProjects = data.personalProjects;
				}
			}
		);
	}
}
