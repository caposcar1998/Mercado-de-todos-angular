import { TestBed } from '@angular/core/testing';

import { MostrarProductoService } from './mostrar-producto.service';

describe('MostrarProductoService', () => {
  let service: MostrarProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
