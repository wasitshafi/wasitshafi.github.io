import { Component } from '@angular/core';

import { Constants } from '@shared';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: [
		'./skills.component.scss',
		'./skills-shared.component.scss',
		'./skills-responsive.component.scss',
	],
})
export class SkillsComponent {
	public skills: any;

	constructor(
		public constants: Constants,
		public userProfileService: UserProfileService
	) {
		this.skills = this.userProfileService.portfolioData$.subscribe((data) => {
			if (data?.skills) {
				this.skills = data.skills;
			}
		});
	}
}
