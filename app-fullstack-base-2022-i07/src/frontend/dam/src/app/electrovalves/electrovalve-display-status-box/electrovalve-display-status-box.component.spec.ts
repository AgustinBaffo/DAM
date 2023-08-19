import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElectrovalveDisplayStatusBoxComponent } from './electrovalve-display-status-box.component';

describe('ElectrovalveDisplayStatusBoxComponent', () => {
  let component: ElectrovalveDisplayStatusBoxComponent;
  let fixture: ComponentFixture<ElectrovalveDisplayStatusBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectrovalveDisplayStatusBoxComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElectrovalveDisplayStatusBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
