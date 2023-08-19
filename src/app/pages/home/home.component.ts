import { Component } from '@angular/core';

import { Constants } from '../../common/constants';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	public constructor(public constants: Constants) {}
}
