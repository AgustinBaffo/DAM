import { Component } from '@angular/core';
import { MeasurementsSimulatorService } from '../services/measurements-simulator.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	public simulation: boolean = false;

	constructor(private simService: MeasurementsSimulatorService) { }

	toggleSimulation() {
		if (this.simulation) {
			this.simService.start();
		} else {
			this.simService.stop();
		}
	}
}
