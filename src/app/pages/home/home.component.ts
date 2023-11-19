import { Component, OnInit, OnDestroy } from '@angular/core';

import { Constants } from '@shared';
import { UserProfileService, AppDataService } from '@services';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [
		'./home.component.scss',
		'./home-shared.component.scss',
		'./home-responsive.component.scss',
	],
})
export class HomeComponent implements OnInit, OnDestroy {
	public SCROLL_TO_TOP_THRESHOLD = 600;

	public constructor(
		public appDataService: AppDataService,
		public constants: Constants,
		public userProfileService: UserProfileService
	) {}

	ngOnInit(): void {
		document.addEventListener('scroll', this.handleWindowScroll.bind(this));
	}

	ngOnDestroy(): void {
		document.removeEventListener('scroll', this.handleWindowScroll);
	}

	public handleWindowScroll() {
		const backToTopButton = document.getElementById(
			this.constants.STYLE_PREFIX + 'scroll-to-top-button'
		);

		//  for more info refer: https://stackoverflow.com/questions/19618545/body-scrolltop-vs-documentelement-scrolltop-vs-window-pageyoffset-vs-window-scro
		if (
			document.body.scrollTop > this.SCROLL_TO_TOP_THRESHOLD ||
			document.documentElement.scrollTop > this.SCROLL_TO_TOP_THRESHOLD
		) {
			backToTopButton?.style?.setProperty('visibility', 'visible');
			backToTopButton?.style?.setProperty('opacity', '1');
		} else {
			backToTopButton?.style?.setProperty('visibility', 'hidden');
			backToTopButton?.style?.setProperty('opacity', '0');
		}
	}

	public handleScrollToTop() {
		window.scrollTo(0, 0);
	}
}
