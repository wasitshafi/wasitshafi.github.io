import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// @layouts
import { HomeComponent } from '@pages/home/home.component';
import { FooterComponent } from '@layouts/footer/footer.component';
import { HeaderComponent } from '@layouts/header/header.component';
import { NavComponent } from '@layouts/header/nav/nav.component';

// @common
import { Constants } from '@common/constants';

// @components
import { WorkExperienceComponent } from '@components/work-experience/work-experience.component';
import { SkillsComponent } from '@components/skills/skills.component';
import { PersonalProjectsComponent } from '@components/personal-projects/personal-projects.component';
import { EducationComponent } from '@components/education/education.component';
import { AchievementsAndResponsibilitiesComponent } from '@components/achievements-and-responsibilities/achievements-and-responsibilities.component';
import { AwardsAndCertificationsComponent } from '@components/awards-and-certifications/awards-and-certifications.component';
import { CodingAndSocialProfilesComponent } from '@components/coding-and-social-profiles/coding-and-social-profiles.component';

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
