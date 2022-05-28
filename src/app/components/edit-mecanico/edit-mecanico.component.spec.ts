import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMecanicoComponent } from './edit-mecanico.component';

describe('EditMecanicoComponent', () => {
  let component: EditMecanicoComponent;
  let fixture: ComponentFixture<EditMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMecanicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
