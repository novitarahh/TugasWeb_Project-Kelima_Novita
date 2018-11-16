import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

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
import { RecipeStartNovitaComponent } from './recipeNovita/recipe-startNovita/recipe-startNovita.component';
import { RecipeEditNovitaComponent } from './recipeNovita/recipe-editNovita/recipe-editNovita.component';

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
    DropdownNovitaDirective,
    RecipeStartNovitaComponent,
    RecipeEditNovitaComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListNovitaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
