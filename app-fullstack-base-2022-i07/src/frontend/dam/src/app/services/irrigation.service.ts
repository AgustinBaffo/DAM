import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class IrrigationService {

	constructor(private _http: HttpClient) { }

	getLogRegisters(): Promise<any> {
		return firstValueFrom(this._http.get('http://localhost:8000/irrigation'));
	}

	getLogRegistersById(id: number): Promise<any> {
		return firstValueFrom(this._http.get(`http://localhost:8000/irrigation/${id}`));
	}

	getCurrentValueById(id: number): Promise<any> {
		return firstValueFrom(this._http.get(`http://localhost:8000/irrigation/${id}/currentValue`));
	}

	setIrrigationRegister(electrovalveId: number, opened: number, date: Date): Promise<any> {
		const data = {
			electrovalveId: electrovalveId,
			opened: opened,
			date: date.toISOString(),
		};
		return firstValueFrom(this._http.post('http://localhost:8000/irrigation/register', data));
	}



}
