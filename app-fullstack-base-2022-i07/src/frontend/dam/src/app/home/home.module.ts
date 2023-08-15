import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { DevicesSummaryTableComponent } from '../devices/devices-summary-table/devices-summary-table.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HomePageRoutingModule
	],
	declarations: [
		HomePage,
		DevicesSummaryTableComponent
	]
})
export class HomePageModule { }
