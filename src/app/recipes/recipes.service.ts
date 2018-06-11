import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {

    private recepies: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tastu-schnitzel - just awesome!',
            'https://www.recipetineats.com/wp-content/uploads/2017/08/Schnitzel-3-landscape.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'Big Fat Burger',
            'What else you need to say?',
            'https://i.pinimg.com/originals/d3/f3/48/d3f348e98ed526bcbcffe8bf4a7a6674.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 3)
            ]
        )
    ];
    
    constructor (private shoppingListService: ShoppingListService) {}

    getRecipes () {
        return this.recepies.slice();
    }

    getRecipe (id: number) {
        return this.recepies[id];
    }

    addIngredientsToShoppingList (ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}