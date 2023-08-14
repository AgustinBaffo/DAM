import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-device-measurement-table',
	templateUrl: './device-measurement-table.component.html',
	styleUrls: ['./device-measurement-table.component.scss'],
})
export class DeviceMeasurementTableComponent implements OnInit {

	@Input() sensorData: any[] = [];
	constructor() { }

	ngOnInit() { }

	stateBackgroundColor(valor: number): { [key: string]: string } {
		if (valor >= 0 && valor <= 10) {
			return { backgroundColor: '#F08000', color: 'white' }; // Orange
		} else if (valor > 10 && valor <= 30) {
			return { backgroundColor: 'green', color: 'white' };
		} else if (valor > 30 && valor <= 60) {
			return { backgroundColor: '#FF4433', color: 'black' }; // Red
		} else {
			return { backgroundColor: 'gray', color: 'white' };
		}
	}
}
