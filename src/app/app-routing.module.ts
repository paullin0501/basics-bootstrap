import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RouterModule, Routes } from '@angular/router';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const approutes: Routes = [] = [
  {path : '', redirectTo:'/recipes',pathMatch: 'full'},
  {path : 'recipes', component: RecipesComponent, children:[
    {path: '',component: RecipeStartComponent},
    {path: 'new',component: RecipeEditComponent},
    {path: ':id',component: RecipeDetailComponent},
    {path: ':id/edit',component: RecipeEditComponent}
  ] },
  {path : 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [(RouterModule.forRoot(approutes))],
  exports: [RouterModule]

})

export class AppRoutingModule{
}