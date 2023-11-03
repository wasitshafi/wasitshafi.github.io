import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Constants } from '@shared/constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UserProfileService {
	public portfolioData$ = new BehaviorSubject<any>({});

	constructor(
		public constants: Constants,
		private httpClient: HttpClient
	) {
		// TODO: implement mongoDB to store the data, instead of using the data in JSON file locally

		this.getData(this.constants.PORTFOLIO_DATA_URL).subscribe((data) => {
			// update the portfolio data
			this.portfolioData$.next(data);
		});
	}

	private getData(url: string) {
		return this.httpClient.get(url);
	}
}
