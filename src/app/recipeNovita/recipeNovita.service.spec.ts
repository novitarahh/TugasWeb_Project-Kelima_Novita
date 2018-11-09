/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipeNovitaService } from './recipeNovita.service';

describe('Service: RecipeNovita', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeNovitaService]
    });
  });

  it('should ...', inject([RecipeNovitaService], (service: RecipeNovitaService) => {
    expect(service).toBeTruthy();
  }));
});
