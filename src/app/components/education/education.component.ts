import { Component } from '@angular/core';

import { Constants } from '@common';

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
	constructor(public constants: Constants) {}
}
