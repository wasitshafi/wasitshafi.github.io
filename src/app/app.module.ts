import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavComponent } from './layouts/header/nav/nav.component';

import { Constants } from './common/constants';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

@NgModule({
	// Note: declarations/imports/providers/bootstrap should be in sorted order
	declarations: [
		AppComponent,
		FooterComponent,
		HeaderComponent,
		HomeComponent,
		NavComponent,
		WorkExperienceComponent,
	],
	imports: [AppRoutingModule, BrowserModule, HttpClientModule],
	providers: [Constants],
	bootstrap: [AppComponent],
})
export class AppModule {}
