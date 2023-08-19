import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesPage } from './devices.page';
import { DeviceMeasurementTableComponent } from './device-measurement-table/device-measurement-table.component';

const routes: Routes = [
  {
    path: '',
    component: DevicesPage
  },
  {
    path: ':id',
    component: DevicesPage
  },
  {
    path: ':id/measurements',
    component: DeviceMeasurementTableComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesPageRoutingModule { }
