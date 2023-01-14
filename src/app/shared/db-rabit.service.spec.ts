import { TestBed } from '@angular/core/testing';

import { DbRabitService } from './db-rabit.service';

describe('DbRabitService', () => {
  let service: DbRabitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbRabitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
