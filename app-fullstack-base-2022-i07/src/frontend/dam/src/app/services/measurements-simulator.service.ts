import { Injectable } from '@angular/core';
import { DispositivoService } from './dispositivo.service'
import { IrrigationService } from './irrigation.service';

@Injectable({
	providedIn: 'root',
})

export class MeasurementsSimulatorService {
	private timerSimulation: any;
	private devicesIdList: any[] = [];
	private electrovalvesIdList: any[] = [];
	private randomValues: any[] = [];

	// Simulation parameters
	private iterationTime: number = 5000	// ms - Control the speed of the simulation (time between each measurement)
	private mean = 0.15;					// Mean of the increment applied in each iteration
	private standardDeviation = 0.05;		// Standar deviation of the increment applied in each iteration
	private maxValue = 60;
	private minValue = 0;

	constructor(private _dispositivoService: DispositivoService, private _irrigationService: IrrigationService) { }

	async start() {

		console.log("Simuation start!");

		// Fill devicesIdList with devices id values.
		await this.getDevicesIdList();

		// Fill electrovalvesIdList with electrovalves id corresponding to each device.
		await this.getElectrovalvesIdList();

		// Initialize electrovalve with rand state [0,1].
		await this.initElectrovalves();

		// Set a rand value  between [0,45] for each device.
		this.setRandValues();

		this.timerSimulation = setInterval(() => {
			this.timerSimulationTimeout();
		}, this.iterationTime);
	}

	public stop() {
		this.devicesIdList = [];
		if (this.timerSimulation) {
			clearInterval(this.timerSimulation);
		}
	}

	async timerSimulationTimeout() {

		console.log("Update simulated values");

		const date = new Date();

		// For each device, get electrovalve state.Then add an incremental
		// value which sign depends on if the valve is opened or closed.
		for (let i = 0; i < this.devicesIdList.length && i < this.electrovalvesIdList.length
			&& i < this.randomValues.length; i++) {

			const electrovalveId = this.electrovalvesIdList[i];
			const randomValue = this.randomValues[i];
			let electrovalveOpened = await this.getElectrovalveCurrentValue(electrovalveId);

			console.log(`Device ID: ${this.devicesIdList[i]}, Electrovalve ID: ${electrovalveId}, Value: ${randomValue}, Valve Opened: ${electrovalveOpened}`);

			if (electrovalveOpened !== 0 && electrovalveOpened !== 1) {
				continue;
			}

			// Update value based on assigned probability

			let increment = this.randomNormal();
			if (electrovalveOpened === 1) {
				increment *= -1;
			}

			// @todo: should be read from db again
			this.randomValues[i] += increment;

			// Saturate with max and min value
			this.randomValues[i] = Math.min(Math.max(this.randomValues[i], this.minValue), this.maxValue);

			// Send data
			await this.setValue(this.devicesIdList[i], this.randomValues[i], date)
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
	}

	async initElectrovalves() {
		const date = new Date();
		for (let electrovalveId of this.electrovalvesIdList) {
			const date = new Date();
			let opened = Math.round(Math.random()); // 0 or 1 random
			await this.sendIrrigationLogRegister(Number(electrovalveId), opened, date);
		}
	}

	async sendIrrigationLogRegister(electrovalveId: number, opened: number, date: Date) {
		try {
			await this._irrigationService.setIrrigationRegister(electrovalveId, opened, date);
		} catch (error) {
			console.error('Error while sending irrgation register:', error);
		}
	}


	async getElectrovalvesIdList() {
		for (let dev of this.devicesIdList) {
			await this.getElectrovalId(dev);
		}
	}

	async getElectrovalId(deviceId: number) {
		await this._dispositivoService.getElectrovalveByDeviceId(deviceId)
			.then((ret) => {
				this.electrovalvesIdList.push(ret.electrovalveId);
			})
			.catch((error) => {
				console.log(error)
			})
	}


	async setRandValues() {
		const date = new Date();

		for (let i = 0; i < this.devicesIdList.length; i++) {
			// Generate random data between [0,45].
			this.randomValues.push(Math.floor(Math.random() * 46));
			await this.setValue(this.devicesIdList[i], this.randomValues[i], date)
		}
	}

	async setValue(id: number, val: number, date: Date) {
		try {
			await this._dispositivoService.setMeasurementById(id, val, date);
		} catch (error) {
			console.error('Error while sending sim measurement.', error);
		}
	}

	async getElectrovalveCurrentValue(id: number) {
		let currentVal = 0;
		await this._irrigationService.getCurrentValueById(id)
			.then((ret) => {
				currentVal = ret.currentValue;
			})
			.catch((error) => {
				console.log(error);
			});
		return currentVal;
	}

	private randomNormal() {
		let u = 0;
		let v = 0;
		while (u === 0) u = Math.random(); // Avoid zero
		while (v === 0) v = Math.random(); // Avoid zero

		const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

		return this.mean + z * this.standardDeviation;
	}

}