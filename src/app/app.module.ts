import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavComponent } from './layouts/header/nav/nav.component';

import { Constants } from './common/constants';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		FooterComponent,
		HeaderComponent,
		NavComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [Constants],
	bootstrap: [AppComponent],
})
export class AppModule {}
