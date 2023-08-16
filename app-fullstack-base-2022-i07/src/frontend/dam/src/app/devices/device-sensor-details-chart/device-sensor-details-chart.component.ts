// Before run: npm install --save highcharts
import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
	selector: 'app-device-sensor-details-chart',
	templateUrl: './device-sensor-details-chart.component.html',
	styleUrls: ['./device-sensor-details-chart.component.scss'],
})
export class DeviceSensorDetailsChartComponent implements OnInit {

	@Input() sensorValue: number = 0;
	public myChart: any = 0;
	private chartOptions: any = 0;

	constructor() {
		setTimeout(() => {			
			this.myChart.update({
				series: [{
					name: 'Cb',
					data: [this.sensorValue],
					tooltip: {
						valueSuffix: ' Cb'
					}
				}]
			});
		}, 6000);

	}

	ngOnInit() {}

	ngAfterViewInit() {
		this.generarChart();
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
				text: 'Sensor de humedad'
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
					text: 'Cb'
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
				name: 'Cb',
				data: [this.sensorValue],
				tooltip: {
					valueSuffix: ' Cb'
				}
			}]

		};
		this.myChart = Highcharts.chart('highcharts', this.chartOptions);
	}

}	