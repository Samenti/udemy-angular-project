import { Action, createAction, props } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

// *** old syntax ***
// export const ADD_INGREDIENT = 'ADD_INGREDIENT';
// export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

// export class AddIngredient implements Action {
//   readonly type = ADD_INGREDIENT;

//   constructor(public payload: Ingredient) {}
// }

// export class AddIngredients implements Action {
//   readonly type = ADD_INGREDIENTS;

//   constructor(public payload: Ingredient[]) {}
// }

// export type ShoppingListActions = AddIngredient | AddIngredients;

// *** new syntax ***
export const addIngredient = createAction(
  '[Shopping List] Add Ingredient',
  props<{ ingredient: Ingredient }>()
);

export const addIngredients = createAction(
  '[Shopping List] Add Ingredients',
  props<{ ingredients: Ingredient[] }>()
);
