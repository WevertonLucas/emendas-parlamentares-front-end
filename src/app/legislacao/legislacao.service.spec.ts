import { TestBed } from '@angular/core/testing';

import { LegislacaoService } from './legislacao.service';

describe('LegislacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LegislacaoService = TestBed.get(LegislacaoService);
    expect(service).toBeTruthy();
  });
});
