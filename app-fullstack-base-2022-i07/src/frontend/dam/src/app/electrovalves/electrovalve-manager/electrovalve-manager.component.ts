import { Component, Input, OnInit } from '@angular/core';
import { IrrigationService } from 'src/app/services/irrigation.service';

@Component({
	selector: 'app-electrovalve-manager',
	templateUrl: './electrovalve-manager.component.html',
	styleUrls: ['./electrovalve-manager.component.scss'],
})
export class ElectrovalveManagerComponent implements OnInit {

	@Input() electrovalveId: number = 0;
	electrovalveOpen: boolean = false; // @todo get real value
	constructor(private _irrigationService: IrrigationService) { }

	ngOnInit() { }

	getElectrovalveImageSource(): string {
		const basePath = './assets/electrovalve/';
		const imageName = this.electrovalveOpen ? 'electrovalve_opened.jpg' : 'electrovalve_closed.jpg';
		return basePath + imageName;
	}
	
	toggleElectrovalve() {

		const newStateOpened = !this.electrovalveOpen;

		// @todo send command to real electrovalve (using async/await)
		const ret = this.sendCommandToElectrovalve(newStateOpened);

		if (ret) {
			this.electrovalveOpen = newStateOpened;
			const date = new Date();
			this.sendIrrigationLogRegister(this.electrovalveOpen ? 1 : 0, date);
		} else {
			console.error('Error while openning electrovalve ' + this.electrovalveId);
		}

	}

	sendCommandToElectrovalve(opened: boolean) {
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
