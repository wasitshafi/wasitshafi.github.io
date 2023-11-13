import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';

import { Constants } from '@shared';

@Injectable({
	providedIn: 'root',
})
export class AppDataService {
	private isDarkThemeModeEnabled: boolean;

	constructor(private constants: Constants) {
		const currentTheme = Number(
			localStorage.getItem('wsw-portfolio-current-theme')
		); // if not found then return to null == Number(null) equals to 0

		// TODO: review how to implement the system theme

		if (currentTheme === constants.applicationCurrentTheme.LIGHT) {
			this.isDarkThemeModeEnabled = false;
		} else if (currentTheme === constants.applicationCurrentTheme.DARK) {
			this.isDarkThemeModeEnabled = true;
			document.body.classList.add(this.constants.STYLE_PREFIX + 'dark-theme');
		} else {
			this.isDarkThemeModeEnabled = false;
			localStorage.setItem(
				'wsw-portfolio-current-theme',
				String(this.constants.applicationCurrentTheme.LIGHT)
			);
		}
	}

	public toggleCurrentThemeMode(): void {
		this.isDarkThemeModeEnabled = !this.isDarkThemeModeEnabled;

		if (this.isDarkThemeModeEnabled) {
			document.body.classList.add(this.constants.STYLE_PREFIX + 'dark-theme');
			localStorage.setItem(
				'wsw-portfolio-current-theme',
				String(this.constants.applicationCurrentTheme.DARK)
			);
		} else {
			document.body.classList.remove(
				this.constants.STYLE_PREFIX + 'dark-theme'
			);
			localStorage.setItem(
				'wsw-portfolio-current-theme',
				String(this.constants.applicationCurrentTheme.LIGHT)
			);
		}
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
