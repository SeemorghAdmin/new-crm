import { TestBed } from '@angular/core/testing';

import { AddUniPreDataService } from './add-uni-pre-data.service';

describe('AddUniPreDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddUniPreDataService = TestBed.get(AddUniPreDataService);
    expect(service).toBeTruthy();
  });
});
