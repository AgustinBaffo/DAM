import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { IrrigationService } from 'src/app/services/irrigation.service';

@Component({
	selector: 'app-electrovalve-manager',
	templateUrl: './electrovalve-manager.component.html',
	styleUrls: ['./electrovalve-manager.component.scss'],
})
export class ElectrovalveManagerComponent implements OnInit, OnChanges {

	@Input() electrovalveId: number = 0;
	public electrovalveOpen: number = 2; // Undefined

	constructor(private _irrigationService: IrrigationService, private _actRouter: ActivatedRoute) { }

	ngOnInit() { }

	// @ todo: review it
	// It can't be done in the ngOnInit because the inputs have no value at that point.
	// Same thing with ngAfterViewInit.
	// Since the page is not loading, ionViewWillEnter is not executed.
	// I found this solution to make it work.
	ngOnChanges(changes: SimpleChanges) {
		if (changes['electrovalveId'] && !changes['electrovalveId'].firstChange) {
			this.loadElectrovalveData();
		}
	}

	async loadElectrovalveData() {
		await this._irrigationService.getCurrentValueById(this.electrovalveId)
			.then((ret) => {
				this.electrovalveOpen = ret.currentValue;
			})
			.catch((error) => {
				console.log(error);
			});
	}


	getElectrovalveImageSource(): string {
		return './assets/electrovalve/electrovalve.jpg';
	}
	getElectrovalveDropImageSource(): string {
		return './assets/electrovalve/drop.gif';
	}

	toggleElectrovalve() {

		// @todo: check valid state
		const newStateOpened = this.electrovalveOpen === 1 ? 0 : 1;

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
