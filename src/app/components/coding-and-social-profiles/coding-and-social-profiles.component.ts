import { Component } from '@angular/core';

import { Constants } from '@common';

@Component({
	selector: 'app-coding-and-social-profiles',
	templateUrl: './coding-and-social-profiles.component.html',
	styleUrls: [
		'./coding-and-social-profiles.component.scss',
		'./coding-and-social-profiles-common.component.scss',
		'./coding-and-social-profiles-responsive.component.scss',
	],
})
export class CodingAndSocialProfilesComponent {
	constructor(public constants: Constants) {}
}
