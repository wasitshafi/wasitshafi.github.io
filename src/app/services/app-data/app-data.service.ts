import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AppDataService {
	private isDarkThemeModeEnabled: boolean;

	constructor() {
		this.isDarkThemeModeEnabled = false;
	}

	public toggleCurrentThemeMode(): void {
		this.isDarkThemeModeEnabled = !this.isDarkThemeModeEnabled;
	}

	get getIsDarkThemeModeEnabled(): boolean {
		return this.isDarkThemeModeEnabled;
	}

	get isProdEnv(): boolean {
		return environment.production;
	}

	get isDevEnv(): boolean {
		return environment.development;
	}
}
