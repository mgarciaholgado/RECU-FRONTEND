import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeportivoComponent } from './edit-deportivo.component';

describe('EditDeportivoComponent', () => {
  let component: EditDeportivoComponent;
  let fixture: ComponentFixture<EditDeportivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeportivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
