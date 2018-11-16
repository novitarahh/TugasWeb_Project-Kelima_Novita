import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { RecipeNovitaComponent } from './recipeNovita/recipeNovita.component';
import { ShoppingListNovitaComponent } from './shopping-listNovita/shopping-listNovita.component';
import { RecipeStartNovitaComponent } from './recipeNovita/recipe-startNovita/recipe-startNovita.component';
import { RecipeDetailNovitaComponent } from './recipeNovita/recipe-detailNovita/recipe-detailNovita.component';
import { RecipeEditNovitaComponent } from './recipeNovita/recipe-editNovita/recipe-editNovita.component';

const appRoutes:Routes=[
    { path:'',redirectTo:'/recipe',pathMatch:'full'},
    { path:'recipes',component:RecipeNovitaComponent,children:[
        {path:'',component:RecipeStartNovitaComponent},
        { path:'new',component:RecipeEditNovitaComponent},
        { path:':id',component:RecipeDetailNovitaComponent},
        { path:':id/edit',component:RecipeEditNovitaComponent},
    
    ]},
    { path :'shopping-list',component:ShoppingListNovitaComponent},
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}