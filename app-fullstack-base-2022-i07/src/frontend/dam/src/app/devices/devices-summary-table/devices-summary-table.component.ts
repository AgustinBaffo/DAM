import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-devices-summary-table',
	templateUrl: './devices-summary-table.component.html',
	styleUrls: ['./devices-summary-table.component.scss'],
})
export class DevicesSummaryTableComponent implements OnInit {

	@Input() devicesAndValues: any[] = [];
	
	constructor() { }

	ngOnInit() { }

}