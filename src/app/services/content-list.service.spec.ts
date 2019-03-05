import { TestBed } from '@angular/core/testing';

import { ContentListService } from './content-list.service';

describe('ContentListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentListService = TestBed.get(ContentListService);
    expect(service).toBeTruthy();
  });
});
