import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Constants } from '../../common/constants';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public portfolioData: any;

	public constructor(
		public constants: Constants,
		private httpClient: HttpClient
	) {}

	public ngOnInit(): void {
		this.getData(this.constants.PORTFOLIO_DATA_URL).subscribe((data: any) => {
			console.log(data);
			this.portfolioData = data;
		});
	}

	// TODO: create a service
	private getData(url: string) {
		return this.httpClient.get(url);
	}
}
