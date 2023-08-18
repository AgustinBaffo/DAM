import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-electrovalve-manager',
	templateUrl: './electrovalve-manager.component.html',
	styleUrls: ['./electrovalve-manager.component.scss'],
})
export class ElectrovalveManagerComponent implements OnInit {

	@Input() electrovalveOpen: boolean = false;
	constructor() { }

	ngOnInit() { }

	getElectrovalveImageSource(): string {
		const basePath = './assets/electrovalve/';
		const imageName = this.electrovalveOpen ? 'electrovalve_opened.jpg' : 'electrovalve_closed.jpg';
		return basePath + imageName;
	}

	toggleElectrovalve() {
		this.electrovalveOpen = !this.electrovalveOpen;
	}
}
