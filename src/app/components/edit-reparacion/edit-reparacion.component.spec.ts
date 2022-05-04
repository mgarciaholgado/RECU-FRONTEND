import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReparacionComponent } from './edit-reparacion.component';

describe('EditReparacionComponent', () => {
  let component: EditReparacionComponent;
  let fixture: ComponentFixture<EditReparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReparacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
