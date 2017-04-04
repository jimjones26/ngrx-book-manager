import { TestBed, inject } from '@angular/core/testing';

import { GoogleBooksService } from './google-books.service';

describe('GoogleBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleBooksService]
    });
  });

  it('should ...', inject([GoogleBooksService], (service: GoogleBooksService) => {
    expect(service).toBeTruthy();
  }));
});
