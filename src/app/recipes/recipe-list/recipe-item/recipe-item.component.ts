import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() isSelected: boolean;
  @Output() recipeClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick(recipeName: string) {
    this.recipeClicked.emit(recipeName);
  }
}
