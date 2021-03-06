import { Component } from '@angular/core';

import { Constants } from '@shared';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-achievements-and-responsibilities',
	templateUrl: './achievements-and-responsibilities.component.html',
	styleUrls: [
		'./achievements-and-responsibilities.component.scss',
		'./achievements-and-responsibilities-shared.component.scss',
		'./achievements-and-responsibilities-responsive.component.scss',
	],
})
export class AchievementsAndResponsibilitiesComponent {
	public achievementsAndResponsibilities: any;

	constructor(
		public constants: Constants,
		public userProfileService: UserProfileService
	) {
		this.achievementsAndResponsibilities =
			this.userProfileService.portfolioData$.subscribe((data) => {
				if (data?.achievementsAndResponsibilities) {
					this.achievementsAndResponsibilities =
						data.achievementsAndResponsibilities;
				}
			});
	}
}
