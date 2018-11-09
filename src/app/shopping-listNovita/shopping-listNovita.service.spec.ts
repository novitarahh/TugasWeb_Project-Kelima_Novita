/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShoppingListNovitaService } from './shopping-listNovita.service';

describe('Service: ShoppingListNovita', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingListNovitaService]
    });
  });

  it('should ...', inject([ShoppingListNovitaService], (service: ShoppingListNovitaService) => {
    expect(service).toBeTruthy();
  }));
});
