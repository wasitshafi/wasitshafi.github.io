import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Constants } from '@common/constants';

@Injectable({
	providedIn: 'root',
})
export class UserProfileService {
	/* eslint-disable @typescript-eslint/no-explicit-any */
	public portfolioData: any;
	constructor(
		public constants: Constants,
		private httpClient: HttpClient
	) {
		// TODO: implement mongoDB to store the data, instead of using the data in JSON file locally
		this.getData(this.constants.PORTFOLIO_DATA_URL).subscribe((data) => {
			console.log(data);
			this.portfolioData = data;
		});
	}

	private getData(url: string) {
		return this.httpClient.get(url);
	}
}
