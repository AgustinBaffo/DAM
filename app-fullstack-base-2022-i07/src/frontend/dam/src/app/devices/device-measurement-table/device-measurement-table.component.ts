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
}
