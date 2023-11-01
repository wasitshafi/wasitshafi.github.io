import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsAndCertificationsComponent } from '@components';

describe('AwardsAndCertificationsComponent', () => {
	let component: AwardsAndCertificationsComponent;
	let fixture: ComponentFixture<AwardsAndCertificationsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [AwardsAndCertificationsComponent],
		});
		fixture = TestBed.createComponent(AwardsAndCertificationsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
