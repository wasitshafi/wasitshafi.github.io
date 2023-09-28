import { Injectable } from '@angular/core';

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
}
