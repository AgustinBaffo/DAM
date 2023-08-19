import { Component, OnInit } from '@angular/core';
import { DispositivoService } from 'src/app/services/dispositivo.service';

@Component({
	selector: 'app-devices-summary-table',
	templateUrl: './devices-summary-table.component.html',
	styleUrls: ['./devices-summary-table.component.scss'],
})

export class DevicesSummaryTableComponent implements OnInit {

	public devicesAndValues: any[] = [];
	private timerUpdateCurrentValue: any = 0;

	constructor(private _dispositivoService: DispositivoService) { }

	async ngOnInit() {
		await this._dispositivoService.getListadoDispositivosConEstados()
			.then((dispositivos) => {
				console.log(dispositivos)
				this.devicesAndValues = dispositivos;
			})
			.catch((error) => {
				console.log(error);
			});


		this.startTimerUpdateCurrentValue();
	}

	startTimerUpdateCurrentValue() {
		this.timerUpdateCurrentValue = setInterval(this.updateTable.bind(this), 5000);
	}

	async updateTable() {

		// @todo: que pasa si la respuesta nunca llega?
		// a) deadlock?
		// b) se vuelve a ejecutar timerUpdateCurrentValue->updateChart() y se stackean muchas consultas sin respuestas
		// usar timeout
		await this._dispositivoService.getListadoDispositivosConEstados()
			.then((dispositivos) => {
				console.log(dispositivos)
				this.devicesAndValues = dispositivos;
			})
			.catch((error) => {
				console.log(error);
			});
	}


}