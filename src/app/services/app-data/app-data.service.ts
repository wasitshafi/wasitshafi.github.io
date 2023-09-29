import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AppDataService {
	private isDarkThemeModeEnabled = true;

	constructor() {}

	public toggleCurrentThemeMode() {
		this.isDarkThemeModeEnabled = !this.isDarkThemeModeEnabled;
	}

	get getIsDarkThemeModeEnabled() {
		return this.isDarkThemeModeEnabled;
	}

	get isProdEnv() {
		return environment.production;
	}

	get isDevEnv() {
		return environment.development;
	}
}
