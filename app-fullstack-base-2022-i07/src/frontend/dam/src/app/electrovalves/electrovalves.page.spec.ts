import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectrovalvesPage } from './electrovalves.page';

describe('ElectrovalvesPage', () => {
  let component: ElectrovalvesPage;
  let fixture: ComponentFixture<ElectrovalvesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElectrovalvesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
