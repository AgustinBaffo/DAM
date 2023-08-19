import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { DispositivoService } from 'src/app/services/dispositivo.service';

@Component({
	selector: 'app-device-measurement-table',
	templateUrl: './device-measurement-table.component.html',
	styleUrls: ['./device-measurement-table.component.scss'],
})
export class DeviceMeasurementTableComponent implements OnInit {

	public dispositivoId: number = 0;
	public sensorData: any[] = [];
	
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
	}
}
