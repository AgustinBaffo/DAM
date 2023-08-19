import { Component } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';
import { MeasurementsSimulatorService } from '../services/measurements-simulator.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public devicesAndValues: any[] = [];  
  public simulation: boolean = false;
  
  constructor(private dispositivoService: DispositivoService, private simService: MeasurementsSimulatorService) {}

  async ngOnInit() {
    await this.dispositivoService.getListadoDispositivosConEstados()
      .then((dispositivos) => {
        console.log(dispositivos)
        this.devicesAndValues = dispositivos;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  toggleSimulation() {
    if (this.simulation) {
      this.simService.start();
    } else {
      this.simService.stop();
    }
  }
}
