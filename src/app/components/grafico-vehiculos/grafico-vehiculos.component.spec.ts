import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoVehiculosComponent } from './grafico-vehiculos.component';

describe('GraficoVehiculosComponent', () => {
  let component: GraficoVehiculosComponent;
  let fixture: ComponentFixture<GraficoVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
