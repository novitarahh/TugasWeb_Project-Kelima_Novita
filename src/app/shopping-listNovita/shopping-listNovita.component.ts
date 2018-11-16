import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../sharedNovita/ingredientNovita.model';
import { ShoppingListNovitaService } from '../shopping-listNovita/shopping-listNovita.service';

@Component({
  selector: 'app-shopping-listNovita',
  templateUrl: './shopping-listNovita.component.html',
  styleUrls: ['./shopping-listNovita.component.css']
})
export class ShoppingListNovitaComponent implements OnInit {

  ingredients:Ingredient[]
  //=[
    //new Ingredient('Apples',23),
    //new Ingredient('Tomato',10),
  //];

  constructor(private slsService:ShoppingListNovitaService) { }

  ngOnInit() {
    this.ingredients=this.slsService.getIngredient();
    this.slsService.IngredientChange
    .subscribe(
      (Ingredient:Ingredient[])=>{
        this.ingredients=Ingredient;
      }
    )
  }

  //onIngredientAdded(ingredient:Ingredient)
  //{
  //this.ingredients.push(ingredient);
//}
}
