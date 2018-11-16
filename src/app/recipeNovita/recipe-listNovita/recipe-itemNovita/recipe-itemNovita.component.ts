import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipeNovita.model';
import { RecipeNovitaService } from '../../recipeNovita.service';

@Component({
  selector: 'app-recipe-itemNovita',
  templateUrl: './recipe-itemNovita.component.html',
  styleUrls: ['./recipe-itemNovita.component.css']
})
export class RecipeItemNovitaComponent implements OnInit {

  @Input() recipe:Recipe;
  @Input() index:number;
  // @Output() recipeSelected=new EventEmitter<void>();

 // constructor(private recipeNovitaService:RecipeNovitaService) { }

  ngOnInit() {
  }

  // onSelected(){
  //  //this.recipeSelected.emit();
  //  this.recipeNovitaService.recipeNovitaSelected.emit(this.recipe);
  // }
}
