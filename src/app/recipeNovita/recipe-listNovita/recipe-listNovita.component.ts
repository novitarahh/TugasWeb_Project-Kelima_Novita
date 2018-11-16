import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipeNovita.model';
import { RecipeNovitaService } from '../recipeNovita.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-listNovita',
  templateUrl: './recipe-listNovita.component.html',
  styleUrls: ['./recipe-listNovita.component.css']
})
export class RecipeListNovitaComponent implements OnInit {

  //@Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];
  //property:class recipe
 
  constructor(private recipeNovitaService:RecipeNovitaService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipes=this.recipeNovitaService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

  //onRecipeSelected(recipe:Recipe){
    //this.recipeWasSelected.emit(recipe);
  //}
  
}
