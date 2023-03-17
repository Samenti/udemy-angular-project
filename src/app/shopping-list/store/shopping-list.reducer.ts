import { createReducer, on } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
};

// *** old Redux-like syntax ***
// export function shoppingListReducer(
//   state = initialState,
//   action: ShoppingListActions.ShoppingListActions
// ) {
//   switch (action.type) {
//     case ShoppingListActions.ADD_INGREDIENT:
//       return {
//         ...state,
//         ingredients: [...state.ingredients, action.payload],
//       };
//     case ShoppingListActions.ADD_INGREDIENTS:
//       return {
//         ...state,
//         ingredients: [...state.ingredients, ...action.payload],
//       };
//     case ShoppingListActions.UPDATE_INGREDIENT:
//       const ingredient = state.ingredients[action.payload.index];
//       const updatedIngredient = {
//         ...ingredient,
//         ...action.payload.ingredient,
//       };
//       const updatedIngredients = [...state.ingredients];
//       updatedIngredients[action.payload.index] = updatedIngredient;

//       return {
//         ...state,
//         ingredients: updatedIngredients,
//       };
//     case ShoppingListActions.DELETE_INGREDIENT:
//       return {
//         ...state,
//         ingredients: state.ingredients.filter(
//           (_, index) => index != action.payload
//         ),
//       };

//     default:
//       return state;
//   }
// }

// *** new syntax for ngrx ***
export const shoppingListReducer = createReducer(
  initialState,
  on(ShoppingListActions.addIngredient, (state, { ingredient }) => ({
    ...state,
    ingredients: [...state.ingredients, ingredient],
  })),
  on(ShoppingListActions.addIngredients, (state, { ingredients }) => ({
    ...state,
    ingredients: [...state.ingredients, ...ingredients],
  })),
  on(ShoppingListActions.updateIngredient, (state, { index, ingredient }) => {
    const updatedIngredient = {
      ...state.ingredients[index],
      ...ingredient,
    };
    const updatedIngredients = [...state.ingredients];
    updatedIngredients[index] = updatedIngredient;

    return {
      ...state,
      ingredients: updatedIngredients,
    };
  }),
  on(ShoppingListActions.deleteIngredient, (state, { index }) => ({
    ...state,
    ingredients: state.ingredients.filter((_, idx) => index != idx),
  }))
);
