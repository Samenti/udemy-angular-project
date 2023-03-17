import { Action, createAction, props } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

// *** old syntax ***
// export const ADD_INGREDIENT = 'ADD_INGREDIENT';
// export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
// export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
// export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

// export class AddIngredient implements Action {
//   readonly type = ADD_INGREDIENT;

//   constructor(public payload: Ingredient) {}
// }

// export class AddIngredients implements Action {
//   readonly type = ADD_INGREDIENTS;

//   constructor(public payload: Ingredient[]) {}
// }

// export class UpdateIngredient implements Action {
//   readonly type = UPDATE_INGREDIENT;

//   constructor(public payload: { index: number; ingredient: Ingredient }) {}
// }

// export class DeleteIngredient implements Action {
//   readonly type = DELETE_INGREDIENT;

//   constructor(public payload: number) {}
// }

// export type ShoppingListActions =
//   | AddIngredient
//   | AddIngredients
//   | UpdateIngredient
//   | DeleteIngredient;

// *** new syntax ***
export const addIngredient = createAction(
  '[Shopping List] Add Ingredient',
  props<{ ingredient: Ingredient }>()
);

export const addIngredients = createAction(
  '[Shopping List] Add Ingredients',
  props<{ ingredients: Ingredient[] }>()
);

export const updateIngredient = createAction(
  '[Shopping List] Update Ingredient',
  props<{ index: number; ingredient: Ingredient }>()
);

export const deleteIngredient = createAction(
  '[Shopping List] Delete Ingredient',
  props<{ index: number }>()
);
