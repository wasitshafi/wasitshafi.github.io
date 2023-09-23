import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// @pages
import { HomeComponent } from '@pages';

// @layouts
import { FooterComponent, HeaderComponent, NavComponent } from '@layouts';

// @common
import { Constants } from '@common/constants';

// @components
import {
	AchievementsAndResponsibilitiesComponent,
	AwardsAndCertificationsComponent,
	CodingAndSocialProfilesComponent,
	EducationComponent,
	WorkExperienceComponent,
	SkillsComponent,
	PersonalProjectsComponent,
} from '@components';

@NgModule({
	// Note: declarations/imports/providers/bootstrap should be in sorted order
	declarations: [
		AppComponent,
		FooterComponent,
		HeaderComponent,
		HomeComponent,
		NavComponent,
		WorkExperienceComponent,
		SkillsComponent,
		PersonalProjectsComponent,
		EducationComponent,
		AchievementsAndResponsibilitiesComponent,
		AwardsAndCertificationsComponent,
		CodingAndSocialProfilesComponent,
	],
	imports: [AppRoutingModule, BrowserModule, HttpClientModule],
	providers: [Constants],
	bootstrap: [AppComponent],
})
export class AppModule {}
