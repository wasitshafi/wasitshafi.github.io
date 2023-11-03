import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// @pages
import { HomeComponent } from '@pages';

// @layouts
import { FooterComponent, HeaderComponent, NavComponent } from '@layouts';

// @shared
import { Constants } from '@shared/constants';

// @components
import {
	AboutComponent,
	AchievementsAndResponsibilitiesComponent,
	AwardsAndCertificationsComponent,
	CodingAndSocialProfilesComponent,
	ContactComponent,
	EducationComponent,
	PersonalProjectsComponent,
	SkillsComponent,
	WorkExperienceComponent,
} from '@components';

@NgModule({
	// Note: declarations/imports/providers/bootstrap should be in sorted order
	declarations: [
		AboutComponent,
		AchievementsAndResponsibilitiesComponent,
		AppComponent,
		AwardsAndCertificationsComponent,
		CodingAndSocialProfilesComponent,
		ContactComponent,
		EducationComponent,
		FooterComponent,
		HeaderComponent,
		HomeComponent,
		NavComponent,
		PersonalProjectsComponent,
		SkillsComponent,
		WorkExperienceComponent,
	],
	imports: [AppRoutingModule, BrowserModule, HttpClientModule],
	providers: [Constants],
	bootstrap: [AppComponent],
})
export class AppModule {}
