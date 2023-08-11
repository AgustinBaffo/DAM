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

}
