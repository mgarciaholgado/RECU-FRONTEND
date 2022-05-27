import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoterrenoComponent } from './edit-todoterreno.component';

describe('EditTodoterrenoComponent', () => {
  let component: EditTodoterrenoComponent;
  let fixture: ComponentFixture<EditTodoterrenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTodoterrenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoterrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
