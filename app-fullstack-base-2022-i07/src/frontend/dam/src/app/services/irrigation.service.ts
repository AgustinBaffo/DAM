import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IrrigationService {

  constructor(private _http: HttpClient) { }

  // setIrrigationLog(id: number): Promise<any> {
  //   return firstValueFrom(this._http.get(`http://localhost:8000/dispositivo/${id}/currentValue`));
  // }
}
