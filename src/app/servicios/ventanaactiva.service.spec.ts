import { TestBed } from '@angular/core/testing';

import { VentanaactivaService } from './ventanaactiva.service';

describe('VentanaactivaService', () => {
  let service: VentanaactivaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentanaactivaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
