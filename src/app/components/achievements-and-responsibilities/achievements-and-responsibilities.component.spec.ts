import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsAndResponsibilitiesComponent } from '@components';

describe('AchievementsAndResponsibilitiesComponent', () => {
	let component: AchievementsAndResponsibilitiesComponent;
	let fixture: ComponentFixture<AchievementsAndResponsibilitiesComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [AchievementsAndResponsibilitiesComponent],
		});
		fixture = TestBed.createComponent(AchievementsAndResponsibilitiesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
