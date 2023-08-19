import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { DispositivoService } from 'src/app/services/dispositivo.service';

@Component({
	selector: 'app-devices',
	templateUrl: './devices.page.html',
	styleUrls: ['./devices.page.scss'],
})

export class DevicesPage implements OnInit {

	public deviceId: number = 0;
	public electrovalveId: number = 0;

	constructor(private _dispositivoService: DispositivoService, private _actRouter: ActivatedRoute) { }

	async ngOnInit() {
		this.deviceId = Number(this._actRouter.snapshot.paramMap.get('id'));
		await this._dispositivoService.getElectrovalveByDeviceId(this.deviceId)
			.then((ret) => {
				this.electrovalveId = ret.electrovalveId; 
			})
			.catch((error) => {
				console.log(error)
			})
	}

	
}