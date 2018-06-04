import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();

    private recepies: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/skillet-chicken-roasted-potatoes-carrots-ck.jpg?itok=dzdpIO4s'),
        new Recipe('A Second Test Recipe', 'This is simply a second test', 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/skillet-chicken-roasted-potatoes-carrots-ck.jpg?itok=dzdpIO4s')
    ];

    getRecipes () {
        return this.recepies.slice();
    }
}