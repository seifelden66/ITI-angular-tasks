import { TestBed } from '@angular/core/testing';

import { SingleProductService } from './cart.service';

describe('SingleProductService', () => {
  let service: SingleProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
