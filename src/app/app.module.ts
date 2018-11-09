import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderNovitaComponent } from './headerNovita/headerNovita.component';
import { RecipeNovitaComponent } from './recipeNovita/recipeNovita.component';
import { ShoppingListNovitaComponent } from './shopping-listNovita/shopping-listNovita.component';
import { RecipeDetailNovitaComponent } from './recipeNovita/recipe-detailNovita/recipe-detailNovita.component';
import { RecipeListNovitaComponent } from './recipeNovita/recipe-listNovita/recipe-listNovita.component';
import { RecipeItemNovitaComponent } from './recipeNovita/recipe-listNovita/recipe-itemNovita/recipe-itemNovita.component';
import { ShoppingEditNovitaComponent } from './shopping-listNovita/shopping-editNovita/shopping-editNovita.component';
import { DropdownNovitaDirective } from './sharedNovita/dropdownNovita.directive';
import { ShoppingListNovitaService } from './shopping-listNovita/shopping-listNovita.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNovitaComponent,
    RecipeNovitaComponent,
    ShoppingListNovitaComponent,
    RecipeListNovitaComponent,
    RecipeDetailNovitaComponent,
    RecipeItemNovitaComponent,
    ShoppingEditNovitaComponent,
    DropdownNovitaDirective
],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingListNovitaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
