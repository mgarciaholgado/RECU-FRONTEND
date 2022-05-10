import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoEmpleadosComponent } from './grafico-empleados.component';

describe('GraficoEmpleadosComponent', () => {
  let component: GraficoEmpleadosComponent;
  let fixture: ComponentFixture<GraficoEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
