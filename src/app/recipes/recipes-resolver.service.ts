import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map, of, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromAppStore from 'src/app/store/app.reducer';
import * as RecipesActions from './store/recipes.actions';
import { Actions, ofType } from '@ngrx/effects';

// @Injectable({
//   providedIn: 'root',
// })
// export class RecipesResolverService implements Resolve<Recipe[]> {
//   constructor(
//     private dataStorageService: DataStorageService,
//     private recipeService: RecipeService
//   ) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const recipes = this.recipeService.getRecipes();
//     if (recipes.length === 0) {
//       return this.dataStorageService.fetchRecipes();
//     } else {
//       return recipes;
//     }
//   }
// }

export const recipesResolver = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const store = inject(Store<fromAppStore.AppState>);
  const actions$ = inject(Actions);
  return store.select('recipes').pipe(
    take(1),
    map((recipesState) => recipesState.recipes),
    switchMap((recipes) => {
      if (recipes.length === 0) {
        // *** old syntax ***
        // store.dispatch(new RecipesActions.FetchRecipes());
        // return actions$.pipe(ofType(RecipesActions.SET_RECIPES), take(1));
        // *** new syntax ***
        store.dispatch(RecipesActions.fetchRecipes());
        return actions$.pipe(ofType(RecipesActions.setRecipes), take(1));
      } else {
        return of(recipes);
      }
    })
  );
};
