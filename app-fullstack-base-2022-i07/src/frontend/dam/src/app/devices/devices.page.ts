import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'app-devices',
	templateUrl: './devices.page.html',
	styleUrls: ['./devices.page.scss'],
})

export class DevicesPage implements OnInit {

	public dispositivoId: number = 0;

	constructor(private _actRouter: ActivatedRoute) { }

	async ngOnInit() {
		this.dispositivoId = Number(this._actRouter.snapshot.paramMap.get('id'));
	}

	
}