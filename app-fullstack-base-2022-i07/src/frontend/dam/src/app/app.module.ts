import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// import { HoverClickableColorDirective } from './directives/hover-clickable-color.directive';
// import { DateFormatPipe } from '../pipes/date-format.pipe';
// import { Med2State } from './pipes/med2State.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // HoverClickableColorDirective,
    // DateFormatPipe,
    // Med2State, 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
