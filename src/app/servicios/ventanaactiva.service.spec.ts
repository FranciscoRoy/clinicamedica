import { TestBed } from '@angular/core/testing';

import { VentanaActivaService } from './ventanaactiva.service';

describe('VentanaactivaService', () => {
  let service: VentanaActivaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentanaActivaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
