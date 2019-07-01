import { TestBed } from '@angular/core/testing';

import { AppUrlsService } from './app-urls.service';

describe('AppUrlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppUrlsService = TestBed.get(AppUrlsService);
    expect(service).toBeTruthy();
  });
});
