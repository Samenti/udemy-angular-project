import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { exhaustMap, map, Observable, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://udemy-angular-project-d838f-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => console.log(response));
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.authService.user.pipe(
      // take(1) takes the latest value from the observable and immediately unsubscribes
      take(1),
      // here exhaustMap subscribes to an outer observable (user) and executes a mapping function
      // that returns an inner observable (http request); it passes down the combined signal when
      // both observables complete
      exhaustMap((user) => {
        return this.http.get<Recipe[]>(
          'https://udemy-angular-project-d838f-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
          { params: new HttpParams().set('auth', user.token) }
        );
      }),
      // set the ingredients to an empty array if it doesn't exist
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
