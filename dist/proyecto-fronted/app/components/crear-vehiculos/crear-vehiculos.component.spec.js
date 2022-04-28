import { TestBed } from '@angular/core/testing';
import { CrearVehiculosComponent } from './crear-vehiculos.component';
describe('CrearVehiculosComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CrearVehiculosComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(CrearVehiculosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=crear-vehiculos.component.spec.js.map