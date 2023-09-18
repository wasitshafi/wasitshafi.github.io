import { Component } from '@angular/core';

import { Constants } from '@common/constants';

@Component({
	selector: 'app-work-experience',
	templateUrl: './work-experience.component.html',
	styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
	constructor(public constants: Constants) {}
}
