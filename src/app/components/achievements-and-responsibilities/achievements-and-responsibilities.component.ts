import { Component } from '@angular/core';

import { Constants } from '@common';

@Component({
	selector: 'app-achievements-and-responsibilities',
	templateUrl: './achievements-and-responsibilities.component.html',
	styleUrls: [
		'./achievements-and-responsibilities.component.scss',
		'./achievements-and-responsibilities-common.component.scss',
		'./achievements-and-responsibilities-responsive.component.scss',
	],
})
export class AchievementsAndResponsibilitiesComponent {
	constructor(public constants: Constants) {}
}
