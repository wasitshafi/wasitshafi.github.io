import { Component, inject } from '@angular/core';

import { Constants } from '@shared';

import { environment } from '@environments/environment';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	public constants = inject(Constants);

	public readonly environment = environment;
}
