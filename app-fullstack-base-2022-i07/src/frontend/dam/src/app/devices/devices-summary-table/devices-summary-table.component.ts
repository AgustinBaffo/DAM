import { Component, OnInit } from '@angular/core';
import { DispositivoService } from 'src/app/services/dispositivo.service';

@Component({
	selector: 'app-devices-summary-table',
	templateUrl: './devices-summary-table.component.html',
	styleUrls: ['./devices-summary-table.component.scss'],
})

export class DevicesSummaryTableComponent implements OnInit {

	public devicesAndValues: any[] = [];

	constructor(private dispositivoService: DispositivoService) { }

	async ngOnInit() {
		await this.dispositivoService.getListadoDispositivosConEstados()
			.then((dispositivos) => {
				console.log(dispositivos)
				this.devicesAndValues = dispositivos;
			})
			.catch((error) => {
				console.log(error);
			});
	}

}