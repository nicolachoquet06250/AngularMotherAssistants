import { TestBed } from '@angular/core/testing';

import { JarvisService } from './jarvis.service';

describe('JarvisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JarvisService = TestBed.get(JarvisService);
    expect(service).toBeTruthy();
  });
});
