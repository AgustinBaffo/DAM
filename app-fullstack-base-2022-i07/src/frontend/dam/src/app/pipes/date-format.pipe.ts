import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat',
  standalone: true,
})

export class DateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'dd-MM-yyyy HH:mm:ss');
  }

}