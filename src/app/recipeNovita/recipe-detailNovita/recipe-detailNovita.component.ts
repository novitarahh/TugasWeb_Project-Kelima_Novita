import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipeNovita.model';
import { RecipeNovitaService } from '../recipeNovita.service';

@Component({
  selector: 'app-recipe-detailNovita',
  templateUrl: './recipe-detailNovita.component.html',
  styleUrls: ['./recipe-detailNovita.component.css']
})
export class RecipeDetailNovitaComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private recipeNovitaService:RecipeNovitaService) { }

  ngOnInit() {
  }

  onAddShoppingList(){
    this.recipeNovitaService.addIngredientsShoppingList(this.recipe.ingredient);
  }

}
