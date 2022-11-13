import { TestBed } from '@angular/core/testing';

import { CondominiumsService } from './condominiums.service';

describe('CondominiumsService', () => {
  let service: CondominiumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondominiumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
