import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispositivoPageRoutingModule } from './dispositivo-routing.module';

import { DispositivoPage } from './dispositivo.page';
import { DateFormatPipe } from '../pipes/date-format.pipe';
import { Med2State } from '../pipes/med2State.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispositivoPageRoutingModule,
  ],
  declarations: [DispositivoPage, DateFormatPipe, Med2State]
})
export class DispositivoPageModule {}