// Before run: npm install --save highcharts
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
// import { timeout } from 'rxjs/operators';

import { DispositivoService } from 'src/app/services/dispositivo.service'

import * as Highcharts from 'highcharts';


declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
	selector: 'app-device-sensor-details-chart',
	templateUrl: './device-sensor-details-chart.component.html',
	styleUrls: ['./device-sensor-details-chart.component.scss'],
})
export class DeviceSensorDetailsChartComponent implements OnInit, OnDestroy {

	@Input() deviceId: number = -1;

	private sensorValue: number = -1;
	public myChart: any = 0;
	private chartOptions: any = 0;
	private timerUpdateCurrentValue: any = 0;

	constructor(private _dispositivoService: DispositivoService, private _actRouter: ActivatedRoute) { }

	async ngOnInit() {

		await this._dispositivoService.getDeviceCurrentValueByID(this.deviceId)
			.then((ret) => {
				this.sensorValue = Number(ret.currentValue);
			})
			.catch((error) => {
				console.log(error)
			})

		this.createChart();
	}

	ngOnDestroy() {
		clearInterval(this.timerUpdateCurrentValue);
	}

	createChart() {
		this.generarChart();
		this.startTimerUpdateCurrentValue();
	}

	startTimerUpdateCurrentValue() {
		this.timerUpdateCurrentValue = setInterval(this.updateChart.bind(this), 5000); // @todo: change to 10000
	}

	async updateChart() {

		// @todo: que pasa si la respuesta nunca llega?
		// a) deadlock?
		// b) se vuelve a ejecutar timerUpdateCurrentValue->updateChart() y se stackean muchas consultas sin respuestas
		// usar timeout
		await this._dispositivoService.getDeviceCurrentValueByID(this.deviceId)
			.then((ret) => {
				this.sensorValue = Number(ret.currentValue);
			})
			.catch((error) => {
				console.log(error)
			})

		console.log('Update chart: ' + this.sensorValue);
		this.myChart.update({
			series: [{
				name: 'Humedad',
				data: [this.sensorValue],
				tooltip: {
					valueSuffix: ' Cb'
				}
			}]
		});
	}

	generarChart() {
		this.chartOptions = {
			chart: {
				type: 'gauge',
				plotBackgroundColor: null,
				plotBackgroundImage: null,
				plotBorderWidth: 0,
				plotShadow: false
			}
			, title: {
				text: 'Sensor de humedad ' + this.deviceId,
				style: {
					display: 'none'
				}
			}
			, credits: { enabled: false }
			, pane: {
				startAngle: -150,
				endAngle: 150
			}

			, yAxis: {
				min: 0,
				max: 100,

				minorTickInterval: 'auto',
				minorTickWidth: 1,
				minorTickLength: 10,
				minorTickPosition: 'inside',
				minorTickColor: '#666',

				tickPixelInterval: 30,
				tickWidth: 2,
				tickPosition: 'inside',
				tickLength: 10,
				tickColor: '#666',
				labels: {
					step: 2,
					rotation: 'auto'
				},
				title: {
					text: 'Centibares [Cb]'
				},
				plotBands: [{
					from: 0,
					to: 10,
					color: '#55BF3B' // green
				}, {
					from: 10,
					to: 30,
					color: '#DDDF0D' // yellow
				}, {
					from: 30,
					to: 100,
					color: '#DF5353' // red
				}]
			}
			,

			series: [{
				name: 'Humedad',
				data: [this.sensorValue],
				tooltip: {
					valueSuffix: ' Cb'
				}
			}]

		};

		this.myChart = Highcharts.chart('highcharts', this.chartOptions);
	}

}	