import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVehiculosClienteComponent } from './listar-vehiculos-cliente.component';

describe('ListarVehiculosClienteComponent', () => {
  let component: ListarVehiculosClienteComponent;
  let fixture: ComponentFixture<ListarVehiculosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVehiculosClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
