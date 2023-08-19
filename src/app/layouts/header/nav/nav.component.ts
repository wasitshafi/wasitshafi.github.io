import { Component } from '@angular/core';
import { Constants } from 'src/app/common/constants';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
	public constructor(public constants: Constants) {}
}
