import { Component } from '@angular/core';

import { Constants } from '@shared';
import { UserProfileService, AppDataService } from '@services';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [
		'./home.component.scss',
		'./home-shared.component.scss',
		'./home-responsive.component.scss',
	],
})
export class HomeComponent {
	public constructor(
		public appDataService: AppDataService,
		public constants: Constants,
		public userProfileService: UserProfileService
	) {}
}
