import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { DispositivoService } from '../services/dispositivo.service'

import { DeviceMeasurementTableComponent } from './device-measurement-table/device-measurement-table.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})

export class DevicesPage implements OnInit {

  dispositivoId: number = 0;
  sensorData: any[] = [];

  constructor(private _dispositivoService: DispositivoService, private _actRouter: ActivatedRoute) { }

  async ngOnInit() {
    this.dispositivoId = Number(this._actRouter.snapshot.paramMap.get('id'));
    await this._dispositivoService.getMedicionesByDispositivoId(this.dispositivoId)
      .then((mediciones) => {
        for (let med of mediciones) {
          this.sensorData.push(med)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    console.log(this.sensorData);
  }
}
