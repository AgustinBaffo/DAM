import { Component, Input, OnInit } from '@angular/core';
import { IrrigationService } from 'src/app/services/irrigation.service';

@Component({
	selector: 'app-electrovalve-manager',
	templateUrl: './electrovalve-manager.component.html',
	styleUrls: ['./electrovalve-manager.component.scss'],
})
export class ElectrovalveManagerComponent implements OnInit {

	@Input() electrovalveId: number = 0;
	public electrovalveOpen: number = 2; // Undefined
	constructor(private _irrigationService: IrrigationService) { }

	ngOnInit() { }

	getElectrovalveImageSource(): string {
		return './assets/electrovalve/electrovalve.jpg';
	}
	getElectrovalveDropImageSource(): string{
		return './assets/electrovalve/drop.gif';
	}
	
	toggleElectrovalve() {

		// @todo: check valid state
		const newStateOpened = this.electrovalveOpen===1 ? 0 : 1 ;

		// @todo send command to real electrovalve (using async/await)
		const ret = this.sendCommandToElectrovalve(newStateOpened);

		if (ret) {
			this.electrovalveOpen = newStateOpened;
			const date = new Date();
			this.sendIrrigationLogRegister(this.electrovalveOpen, date);
		} else {
			console.error('Error while openning electrovalve ' + this.electrovalveId);
		}

	}

	sendCommandToElectrovalve(opened: number) {
		// @todo: send command to real electrovalve
		return true;
	}

	async sendIrrigationLogRegister(opened: number, date: Date) {
		try {
			await this._irrigationService.setIrrigationRegister(this.electrovalveId, opened, date);
		} catch (error) {
			console.error('Error while sending irrgation register:', error);
		}
	}
}
