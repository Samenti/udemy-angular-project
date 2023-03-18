import { Action, createAction, props } from '@ngrx/store';

// *** old syntax ***
// export const LOGIN = 'LOGIN';
// export const LOGOUT = 'LOGOUT';

// export class Login implements Action {
//   readonly type = LOGIN;

//   constructor(
//     public payload: {
//       email: string;
//       userId: string;
//       token: string;
//       expirationDate: Date;
//     }
//   ) {}
// }

// export class Logout implements Action {
//   readonly type = LOGOUT;
// }

// export type AuthActions = Login | Logout;

// *** new syntax ***
export const login = createAction(
  '[Auth] Login',
  props<{
    email: string;
    userId: string;
    token: string;
    expirationDate: Date;
  }>()
);

export const logout = createAction('[Auth] Logout');
