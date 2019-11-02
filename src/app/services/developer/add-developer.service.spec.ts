import { TestBed } from '@angular/core/testing';

import { AddDeveloperService } from './add-developer.service';

describe('AddDeveloperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDeveloperService = TestBed.get(AddDeveloperService);
    expect(service).toBeTruthy();
  });
});
