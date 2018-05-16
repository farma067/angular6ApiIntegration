import { TestBed, inject } from '@angular/core/testing';

import { CriService } from './cri.service';

describe('CriService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CriService]
    });
  });

  it('should be created', inject([CriService], (service: CriService) => {
    expect(service).toBeTruthy();
  }));
});
