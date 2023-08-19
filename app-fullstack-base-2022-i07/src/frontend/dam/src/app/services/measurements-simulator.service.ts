import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MeasurementsSimulatorService {
  private timerSimulation: any;

  constructor() {  }

  public start(){
    console.log("Simuation start!");
    this.setRandValues();

    this.timerSimulation = setInterval(() => {
      this.timerSimulationTimeout();
    }, 5000);
  }

  public stop(){
    if (this.timerSimulation) {
      clearInterval(this.timerSimulation);
    }
  }

  private timerSimulationTimeout() {
    console.log('Timer!');
  }

  private setRandValues(){
    console.log('Setting random values');
  }
}