import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicesPageRoutingModule } from './devices-routing.module';

import { DevicesPage } from './devices.page';
import { DeviceMeasurementTableComponent } from './device-measurement-table/device-measurement-table.component'; // Asegúrate de que esta importación sea correcta


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		DevicesPageRoutingModule
	],
	declarations: [
		DevicesPage,
		DeviceMeasurementTableComponent
	]
})
export class DevicesPageModule { }
