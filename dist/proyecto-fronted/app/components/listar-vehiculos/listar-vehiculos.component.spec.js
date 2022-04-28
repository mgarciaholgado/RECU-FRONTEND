import { TestBed } from '@angular/core/testing';
import { ListarVehiculosComponent } from './listar-vehiculos.component';
describe('ListarVehiculosComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListarVehiculosComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(ListarVehiculosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=listar-vehiculos.component.spec.js.map