import { RecipeService } from './../recipes/recipe.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
//  @Output()  featureSelected = new EventEmitter<string>();
  // 改用router來連結頁面
  // onSelect(feature:string){
  //   this.featureSelected.emit(feature);
  // }
  constructor(private dataStorageService:DataStorageService){}
  onSaveData(){
    this.dataStorageService.storeRecipes();
  }
  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
