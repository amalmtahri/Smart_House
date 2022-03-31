import { TestBed } from '@angular/core/testing';

import { FloorService } from './floor.service';

describe('FloorService', () => {
  let service: FloorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
