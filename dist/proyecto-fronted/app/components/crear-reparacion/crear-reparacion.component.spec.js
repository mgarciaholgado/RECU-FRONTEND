import { TestBed } from '@angular/core/testing';
import { CrearReparacionComponent } from './crear-reparacion.component';
describe('CrearReparacionComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CrearReparacionComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(CrearReparacionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=crear-reparacion.component.spec.js.map