import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicesPageRoutingModule } from './devices-routing.module';

import { DevicesPage } from './devices.page';

import { DeviceMeasurementTableComponent } from './device-measurement-table/device-measurement-table.component';
import { DeviceSensorDetailsChartComponent } from './device-sensor-details-chart/device-sensor-details-chart.component';
// import { DevicesSummaryTableComponent } from './devices-summary-table/devices-summary-table.component';  // @todo: review

// import { HoverClickableColorDirective } from '../directives/hover-clickable-color.directive';  // @todo: review
import { DateFormatPipe } from '../pipes/date-format.pipe';
import { Med2State } from '../pipes/med2State.pipe';

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
		// DevicesSummaryTableComponent,
		// HoverClickableColorDirective,
		DateFormatPipe,
		Med2State,
	]
})
export class DevicesPageModule { }
