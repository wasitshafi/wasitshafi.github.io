import { Component } from '@angular/core';

import { Constants } from '@common/constants';

// services
import { AppDataService } from '@services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'portfolio';

	constructor(
		public constants: Constants,
		public appDataService: AppDataService
	) {}
}
