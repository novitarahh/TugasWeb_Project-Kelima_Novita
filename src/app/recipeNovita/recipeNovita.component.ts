import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipeNovita.model';
import { RecipeNovitaService } from './recipeNovita.service';

@Component({
  selector: 'app-recipeNovita',
  templateUrl: './recipeNovita.component.html',
  styleUrls: ['./recipeNovita.component.css'],
  providers: [RecipeNovitaService],
})
export class RecipeNovitaComponent implements OnInit {
  selectedRecipe:Recipe;
  
  constructor(private recipeNovitaService:RecipeNovitaService) { }

  ngOnInit() {
    this.recipeNovitaService.recipeNovitaSelected
    .subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe=recipe;
      }
    )
  }

}
