import { TestBed, async, inject } from '@angular/core/testing';

import { LibraryDetailGuard } from './library-detail.guard';

describe('LibraryDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryDetailGuard]
    });
  });

  it('should ...', inject([LibraryDetailGuard], (guard: LibraryDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
