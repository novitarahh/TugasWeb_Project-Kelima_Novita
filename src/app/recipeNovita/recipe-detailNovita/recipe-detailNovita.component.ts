import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipeNovita.model';
import { RecipeNovitaService } from '../recipeNovita.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detailNovita',
  templateUrl: './recipe-detailNovita.component.html',
  styleUrls: ['./recipe-detailNovita.component.css']
})
export class RecipeDetailNovitaComponent implements OnInit {
 // @Input() recipe:Recipe;
 recipe:Recipe;
 id:number;

  constructor(private recipeNovitaService:RecipeNovitaService,
              private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.recipe=this.recipeNovitaService.getRecipe(this.id);
      }
    )
  }

  onAddShoppingList(){
    this.recipeNovitaService.addIngredientsShoppingList(this.recipe.ingredient);
  }

}
