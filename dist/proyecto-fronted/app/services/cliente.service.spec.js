import { TestBed } from '@angular/core/testing';
import { ClienteService } from './cliente.service';
describe('ClienteService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ClienteService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=cliente.service.spec.js.map