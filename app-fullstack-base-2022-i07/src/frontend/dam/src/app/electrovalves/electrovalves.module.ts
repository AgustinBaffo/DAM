import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectrovalvesPageRoutingModule } from './electrovalves-routing.module';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';

import { ElectrovalvesPage } from './electrovalves.page';
import { ElectrovalveManagerComponent } from './electrovalve-manager/electrovalve-manager.component';
import { IrrigationLogTableComponent } from './irrigation-log-table/irrigation-log-table.component';
import { ElectrovalveDisplayStatusBoxComponent } from './electrovalve-display-status-box/electrovalve-display-status-box.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ElectrovalvesPageRoutingModule,
		DateFormatPipe,
	],
	declarations: [
		ElectrovalvesPage,
		ElectrovalveManagerComponent,
		IrrigationLogTableComponent,
		ElectrovalveDisplayStatusBoxComponent,
	],
	exports: [
		ElectrovalveManagerComponent,
		IrrigationLogTableComponent,
	]
})
export class ElectrovalvesPageModule { }
