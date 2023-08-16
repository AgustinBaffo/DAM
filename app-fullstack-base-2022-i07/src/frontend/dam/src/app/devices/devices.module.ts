import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicesPageRoutingModule } from './devices-routing.module';

import { DevicesPage } from './devices.page';

import { DeviceMeasurementTableComponent } from './device-measurement-table/device-measurement-table.component';
import { DeviceSensorDetailsChartComponent } from './device-sensor-details-chart/device-sensor-details-chart.component';
import { DevicesSummaryTableComponent } from './devices-summary-table/devices-summary-table.component';
import { DisplayStatusBoxComponent } from './display-status-box/display-status-box.component';

import { DateFormatPipe } from '../pipes/date-format.pipe';
import { Med2State } from '../pipes/med2State.pipe';
import { HoverClickableColorDirective } from '../directives/hover-clickable-color.directive';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		DevicesPageRoutingModule,
	],
	declarations: [
		DevicesPage,
		DeviceMeasurementTableComponent,
		DeviceSensorDetailsChartComponent,
		DevicesSummaryTableComponent,
		DateFormatPipe,
		Med2State,
		HoverClickableColorDirective,
		DisplayStatusBoxComponent
	],
	exports: [
		DevicesSummaryTableComponent,
	]
})
export class DevicesPageModule { }
