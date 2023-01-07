import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/7/78/Hillbilly-Hamburger-Casserole-Recipes_%2835120274024%29.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/7/78/Hillbilly-Hamburger-Casserole-Recipes_%2835120274024%29.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() {}
}
