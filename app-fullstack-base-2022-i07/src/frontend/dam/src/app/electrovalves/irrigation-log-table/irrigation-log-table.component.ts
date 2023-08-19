import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { IrrigationService } from 'src/app/services/irrigation.service';

@Component({
	selector: 'app-irrigation-log-table',
	templateUrl: './irrigation-log-table.component.html',
	styleUrls: ['./irrigation-log-table.component.scss'],
})
export class IrrigationLogTableComponent implements OnInit {

	public electrovalveId: number = 0;
	public logRegistersData: any[] = [];

	constructor(private _irrigationService: IrrigationService, private _actRouter: ActivatedRoute) { }

	async ngOnInit() {
		this.electrovalveId = Number(this._actRouter.snapshot.paramMap.get('id'));
		await this._irrigationService.getLogRegistersById(this.electrovalveId)
			.then((registers) => {
				for (let reg of registers) {
					this.logRegistersData.push(reg)
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

}
