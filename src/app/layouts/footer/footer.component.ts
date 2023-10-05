import { Component } from '@angular/core';

import { Constants } from '@common/constants';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: [
		'./footer.component.scss',
		'./footer-common.component.scss',
		'./footer-responsive.component.scss',
	],
})
export class FooterComponent {
	constructor(public constants: Constants) {}
}
