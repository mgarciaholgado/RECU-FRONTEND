import { TestBed } from '@angular/core/testing';
import { ListarClientesComponent } from './listar-clientes.component';
describe('ListarClientesComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListarClientesComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(ListarClientesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=listar-clientes.component.spec.js.map