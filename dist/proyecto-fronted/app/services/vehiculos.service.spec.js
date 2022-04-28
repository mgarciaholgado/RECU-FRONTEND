import { TestBed } from '@angular/core/testing';
import { VehiculoService } from './vehiculos.service';
describe('VehiculosService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(VehiculoService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=vehiculos.service.spec.js.map