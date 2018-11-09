import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipeNovita.model';
import { RecipeNovitaService } from '../recipeNovita.service';

@Component({
  selector: 'app-recipe-listNovita',
  templateUrl: './recipe-listNovita.component.html',
  styleUrls: ['./recipe-listNovita.component.css']
})
export class RecipeListNovitaComponent implements OnInit {

  //@Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];

  
  constructor(private recipeNovitaService:RecipeNovitaService) { }

  ngOnInit() {
    this.recipes = this.recipeNovitaService.getRecipes();
  }

  //onRecipeSelected(recipe:Recipe){
  //  this.recipeWasSelected.emit(recipe);
  // }
}
