import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HomePageModule } from './home/home.module';
import { DevicesPageModule } from './devices/devices.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		HomePageModule,
		DevicesPageModule
	],
	providers: [{
		provide: RouteReuseStrategy,
		useClass: IonicRouteStrategy
	}],
	bootstrap: [AppComponent],
})
export class AppModule { }
