import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectrovalvesPageRoutingModule } from './electrovalves-routing.module';

import { ElectrovalvesPage } from './electrovalves.page';
import { ElectrovalveManagerComponent } from './electrovalve-manager/electrovalve-manager.component';
import { IrrigationLogTableComponent } from './irrigation-log-table/irrigation-log-table.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ElectrovalvesPageRoutingModule
	],
	declarations: [
		ElectrovalvesPage,
		ElectrovalveManagerComponent,
		IrrigationLogTableComponent,
	],
	exports: [
		ElectrovalveManagerComponent,
		IrrigationLogTableComponent,
	]
})
export class ElectrovalvesPageModule { }
