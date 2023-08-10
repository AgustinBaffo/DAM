import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'med2State'
})
export class Med2State implements PipeTransform {

	transform(value: any, args?: any): any {
		if (value < 0){
			return "Invalido";
		}
		else if (value<=10) {
			return "Saturado";
		} else if(value<=30){
			return "CC";
		} else if(value<=60) {
			return "Seco";
		}
		// > 60 va a ser invalido
		return "Invalido";
  }

}