import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss']
})


export class DispositivoPage implements OnInit {

  dispositivoId:number = 0;
  dispositivoMediciones: any[] = [];

  constructor(private _dispositivoService: DispositivoService, private _actRouter: ActivatedRoute) { }

  async ngOnInit() {
    this.dispositivoId = Number(this._actRouter.snapshot.paramMap.get('id'));
    await this._dispositivoService.getMedicionesByDispositivoId(this.dispositivoId)
      .then((mediciones) => {
        for (let med of mediciones) {
          this.dispositivoMediciones.push(med)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    console.log(this.dispositivoMediciones);
  }

  stateBackgroundColor(valor: number): { [key: string]: string } {
    if (valor >= 0 && valor <= 10) {
      return { backgroundColor: '#F08000', color: 'white' }; // Orange
    } else if (valor > 10 && valor <= 30) {
      return { backgroundColor: 'green', color: 'white' };
    } else if (valor > 30 && valor <= 60) {
      return { backgroundColor: '#FF4433', color: 'black' }; // Red
    } else {
      return { backgroundColor: 'gray', color: 'white' };
    }
  }
  
}
