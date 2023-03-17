import { Action, createAction, props } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

// *** old syntax ***
// export const ADD_INGREDIENT = 'ADD_INGREDIENT';

// export class AddIngredient implements Action {
//   readonly type = ADD_INGREDIENT;

//   constructor(public payload: Ingredient) {}
// }

// *** new syntax ***
export const addIngredient = createAction(
  '[Shopping List] Add Ingredient',
  props<{ ingredient: Ingredient }>()
);
