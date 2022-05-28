import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPintorComponent } from './edit-pintor.component';

describe('EditPintorComponent', () => {
  let component: EditPintorComponent;
  let fixture: ComponentFixture<EditPintorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPintorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPintorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
