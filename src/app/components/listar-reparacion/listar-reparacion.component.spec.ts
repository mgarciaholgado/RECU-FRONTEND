import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReparacionComponent } from './listar-reparacion.component';

describe('ListarReparacionComponent', () => {
  let component: ListarReparacionComponent;
  let fixture: ComponentFixture<ListarReparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReparacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
