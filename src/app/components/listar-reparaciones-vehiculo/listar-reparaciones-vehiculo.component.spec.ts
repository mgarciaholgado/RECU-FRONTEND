import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReparacionesVehiculoComponent } from './listar-reparaciones-vehiculo.component';

describe('ListarReparacionesVehiculoComponent', () => {
  let component: ListarReparacionesVehiculoComponent;
  let fixture: ComponentFixture<ListarReparacionesVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReparacionesVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReparacionesVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
