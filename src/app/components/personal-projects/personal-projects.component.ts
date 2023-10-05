import { Component } from '@angular/core';

import { Constants } from '@common';

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
	constructor(public constants: Constants) {}
}
