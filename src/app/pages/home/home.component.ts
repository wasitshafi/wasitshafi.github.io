import { Component } from '@angular/core';

import { Constants } from '@common/constants';
import { UserProfileService } from '@services/user-profile/user-profile.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	public constructor(
		public constants: Constants,
		public userProfile: UserProfileService
	) {}
}
