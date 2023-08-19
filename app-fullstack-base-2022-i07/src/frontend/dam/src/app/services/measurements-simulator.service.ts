import { Injectable } from '@angular/core';
import { DispositivoService } from './dispositivo.service'

@Injectable({
	providedIn: 'root',
})

export class MeasurementsSimulatorService {
	private timerSimulation: any;
	private devicesIdList: any[] = [];
	private randomValues: any[] = [];

	constructor(private _dispositivoService: DispositivoService) { }

	async start() {

		console.log("Simuation start!");

		// Fill devicesIdList with devices id values.
		await this.getDevicesIdList();

		// Set a rand value  between [0,45] for each device.
		this.setRandValues();

		this.timerSimulation = setInterval(() => {
			this.timerSimulationTimeout();
		}, 5000);
	}

	public stop() {
		this.devicesIdList = [];
		if (this.timerSimulation) {
			clearInterval(this.timerSimulation);
		}
	}

	async getDevicesIdList() {
		await this._dispositivoService.getDevicesIdList()
			.then((devicesList) => {
				for (let dev of devicesList) {
					this.devicesIdList.push(dev)
				}
			})
			.catch((error) => {
				console.log(error)
			})
			console.log("Simuation start!");
	}

	private timerSimulationTimeout() {
		// Para cada dispositivo, revisar si la valvula esta abierta o cerrada
		// y sumar un incremental de valor cuyo signo dependa del estado de la 
		// electrovalvula
		console.log('Timer!');
	}

	private setRandValues() {
		console.log(this.devicesIdList[0])
		const date = new Date();

		for (let i = 0; i < this.devicesIdList.length; i++) {
			// Generate random data between [0,45].
			this.randomValues.push(Math.floor(Math.random() * 46));
			this.setValue(this.devicesIdList[i], this.randomValues[i], date)
		}
	}

	async setValue(id: number, val: number, date: Date) {
		try {
			await this._dispositivoService.setMeasurementById(id, val, date);
		} catch (error) {
			console.error('Error while sending sim measurement.', error);
		}
	}

}