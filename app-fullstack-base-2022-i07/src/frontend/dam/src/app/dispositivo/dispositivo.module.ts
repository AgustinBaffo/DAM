import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispositivoPageRoutingModule } from './dispositivo-routing.module';

import { DispositivoPage } from './dispositivo.page';
import { DateFormatPipe } from '../pipes/date-format.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispositivoPageRoutingModule,
  ],
  declarations: [DispositivoPage, DateFormatPipe]
})
export class DispositivoPageModule {}
