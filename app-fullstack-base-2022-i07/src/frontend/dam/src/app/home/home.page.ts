import { Component } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  devicesAndValues: any[] = [];  
  
  constructor(private dispositivoService: DispositivoService) {}

  async ngOnInit() {
    // TODO: add state
    await this.dispositivoService.getListadoDispositivosConEstados()
      .then((dispositivos) => {
        console.log(dispositivos)
        this.devicesAndValues = dispositivos;
      })
      .catch((error) => {
        console.log(error);
      });
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
