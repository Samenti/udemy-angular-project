import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/7/78/Hillbilly-Hamburger-Casserole-Recipes_%2835120274024%29.jpg'
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/7/78/Hillbilly-Hamburger-Casserole-Recipes_%2835120274024%29.jpg'
    ),
  ];
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipeName: string) {
    this.selectedRecipe = this.recipes.find(
      (recipe) => recipe.name === recipeName
    );
  }
}
