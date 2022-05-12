import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoMvsPComponent } from './grafico-mvs-p.component';

describe('GraficoMvsPComponent', () => {
  let component: GraficoMvsPComponent;
  let fixture: ComponentFixture<GraficoMvsPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoMvsPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoMvsPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
