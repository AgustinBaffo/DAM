import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Med2State } from '../pipes/med2State.pipe'; // @TODO: shold be removed
import { HoverClickableColorDirective } from '../directives/hover-clickable-color.directive';  // @TODO: shold be removed
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, 
    Med2State,
    HoverClickableColorDirective
  ]
})
export class HomePageModule {}
