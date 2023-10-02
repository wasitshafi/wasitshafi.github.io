import { Component } from '@angular/core';

import { Constants } from '@common';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
	constructor(public constants: Constants) {}
}
