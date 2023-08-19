import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  constructor(private _http: HttpClient) { }

  getListadoDispositivos (): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/dispositivo'));
  }

  getListadoDispositivosConEstados (): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/dispositivosEstados'));
  }

  getMedicionesByDispositivoId(id: number): Promise<any> {
    return firstValueFrom(this._http.get(`http://localhost:8000/dispositivo/${id}/mediciones`));
  }

  getDeviceCurrentValueById(id: number): Promise<any> {
    return firstValueFrom(this._http.get(`http://localhost:8000/dispositivo/${id}/currentValue`));
  }

  getElectrovalveByDeviceId(id: number): Promise<any> {
    return firstValueFrom(this._http.get(`http://localhost:8000/dispositivo/${id}/electrovalveId`));
  }

  getDevicesIdList(): Promise<any> {
    return firstValueFrom(this._http.get(`http://localhost:8000/dispositivo/devicesId`));
  }

  setMeasurementById(deviceId: number, val: number, date: Date): Promise<any> {
		const data = {
			deviceId: deviceId,
			val: val,
			date: date.toISOString(),
		};
		return firstValueFrom(this._http.post(`http://localhost:8000/dispositivo/mediciones`, data));
	}

}
