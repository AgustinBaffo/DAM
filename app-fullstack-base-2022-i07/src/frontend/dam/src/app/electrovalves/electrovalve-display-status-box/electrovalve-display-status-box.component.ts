import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-electrovalve-display-status-box',
	templateUrl: './electrovalve-display-status-box.component.html',
	styleUrls: ['./electrovalve-display-status-box.component.scss'],
})
export class ElectrovalveDisplayStatusBoxComponent implements OnInit {

	@Input() opened: number = -1; // Undefined

	constructor() { }

	ngOnInit() { }

	openedBackgroundColor(valor: number): { [key: string]: string } {
		if (valor === 0) {
			return { backgroundColor: '#ffa726' }; // Naranja
		} else if (valor === 1) {
			return { backgroundColor: '#66bb6a' }; // Verde
		} else {
			return { backgroundColor: 'gray' };
		}
	}

	getStatusText() {
		if (this.opened === 1) {
		  return 'Abierta';
		} else if (this.opened === 0) {
		  return 'Cerrada';
		} else {
		  return 'Inválido';
		}
	  }

}
