import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as AuthActions from './auth.actions';
import { Injectable } from '@angular/core';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthEffects {
  // *** old, removed syntax ***
  // @Effect()
  // authLogin = this.actions$.pipe(
  //   ofType(AuthActions.LOGIN_START),
  //   switchMap((authData: AuthActions.LoginStart) => {
  //     return this.http
  //       .post<AuthResponseData>(
  //         'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
  //           environment.firebaseAPIKey,
  //         {
  //           email: authData.payload.email,
  //           password: authData.payload.password,
  //           returnSecureToken: true,
  //         }
  //       )
  //       .pipe(
  //         map((resData) => {
  //           const expirationDate = new Date(
  //             new Date().getTime() + +resData.expiresIn * 1000
  //           );
  //           return new AuthActions.Login({
  //             email: resData.email,
  //             userId: resData.localId,
  //             token: resData.idToken,
  //             expirationDate: expirationDate,
  //           });
  //         }),
  //         catchError((error) => {
  //           return of();
  //         })
  //       );
  //   })
  // );

  // *** new syntax ***
  authLogin$ = createEffect(() =>
    this.actions$.pipe(
      // *** old syntax ***
      // ofType(AuthActions.LOGIN_START),
      // switchMap((authData: AuthActions.LoginStart) => {
      //   return this.http
      //     .post<AuthResponseData>(
      //       'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
      //         environment.firebaseAPIKey,
      //       {
      //         email: authData.payload.email,
      //         password: authData.payload.password,
      //         returnSecureToken: true,
      //       }
      //     )
      //     .pipe(
      //       map((resData) => {
      //         return {
      //           type: AuthActions.LOGIN_START,
      //           payload: resData,
      //         };
      //       }),
      //       catchError((error) => {
      //         return of();
      //       })
      //     );
      // })
      // *** new syntax ***
      ofType(AuthActions.loginStart),
      switchMap((authData) => {
        return this.http
          .post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
              environment.firebaseAPIKey,
            {
              email: authData.email,
              password: authData.password,
              returnSecureToken: true,
            }
          )
          .pipe(
            map((resData) => {
              return {
                type: AuthActions.loginStart.type,
                payload: resData,
              };
            }),
            catchError((error) => {
              return of();
            })
          );
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
