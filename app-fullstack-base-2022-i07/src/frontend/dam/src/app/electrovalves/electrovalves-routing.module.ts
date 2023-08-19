import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectrovalvesPage } from './electrovalves.page';
import {IrrigationLogTableComponent} from './irrigation-log-table/irrigation-log-table.component';

const routes: Routes = [
  {
    path: '',
    component: ElectrovalvesPage
  },
  {
    path: ':id/registers',
    component: IrrigationLogTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectrovalvesPageRoutingModule {}
