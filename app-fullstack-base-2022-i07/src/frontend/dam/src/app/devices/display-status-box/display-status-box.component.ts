import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-status-box',
  templateUrl: './display-status-box.component.html',
  styleUrls: ['./display-status-box.component.scss'],
})
export class DisplayStatusBoxComponent implements OnInit {

  @Input() sensorValue: number = -1;
  constructor() { }

  ngOnInit() { }

  stateBackgroundColor(valor: number): { [key: string]: string } {
    if (valor >= 0 && valor <= 10) {
      return { backgroundColor: '#ffa726', color: 'white' }; // Orange
    } else if (valor > 10 && valor <= 30) {
      return { backgroundColor: '#66bb6a', color: 'white' }; // Green
    } else if (valor > 30 && valor <= 60) {
      return { backgroundColor: '#FF6961', color: 'black' }; // Red
    } else {
      return { backgroundColor: 'gray', color: 'white' };
    }
  }

}
