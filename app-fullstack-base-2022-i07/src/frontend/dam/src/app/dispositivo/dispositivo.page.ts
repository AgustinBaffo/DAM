import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service'

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})

export class DispositivoPage implements OnInit {

  dispositivoId:number = 1;
  dispositivoMediciones: any[] = [];

  constructor(private _dispositivoService: DispositivoService) { }

  async ngOnInit() {

    await this._dispositivoService.getMedicionesByDispositivoId(this.dispositivoId)
      .then((mediciones) => {
        for (let med of mediciones) {
          console.log(med)
          this.dispositivoMediciones.push(med)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
