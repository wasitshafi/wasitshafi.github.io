import { Component } from '@angular/core';

import { Constants } from '@common';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: [
		'./skills.component.scss',
		'./skills-common.component.scss',
		'./skills-responsive.component.scss',
	],
})
export class SkillsComponent {
	constructor(public constants: Constants) {}
}
