import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingAndSocialProfilesComponent } from '@components';

describe('CodingAndSocialProfilesComponent', () => {
	let component: CodingAndSocialProfilesComponent;
	let fixture: ComponentFixture<CodingAndSocialProfilesComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CodingAndSocialProfilesComponent],
		});
		fixture = TestBed.createComponent(CodingAndSocialProfilesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
