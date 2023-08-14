import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceSensorDetailsChartComponent } from './device-sensor-details-chart.component';

describe('DeviceSensorDetailsChartComponent', () => {
  let component: DeviceSensorDetailsChartComponent;
  let fixture: ComponentFixture<DeviceSensorDetailsChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceSensorDetailsChartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceSensorDetailsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
