import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[];
  @Input() selectedRecipe: Recipe;
  @Output() recipeSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
