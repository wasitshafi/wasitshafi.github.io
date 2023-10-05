import { Component } from '@angular/core';

import { Constants } from '@common';

@Component({
	selector: 'app-awards-and-certifications',
	templateUrl: './awards-and-certifications.component.html',
	styleUrls: [
		'./awards-and-certifications.component.scss',
		'./awards-and-certifications-common.component.scss',
		'./awards-and-certifications-responsive.component.scss',
	],
})
export class AwardsAndCertificationsComponent {
	constructor(public constants: Constants) {}
}
