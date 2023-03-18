import { Action, createAction, props } from '@ngrx/store';

// *** old syntax ***
// export const LOGIN_START = '[Auth] Login Start';
// export const LOGIN = '[Auth] Login';
// export const LOGOUT = '[Auth] Logout';

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

// export class LoginStart implements Action {
//   readonly type = LOGIN_START;

//   constructor(public payload: { email: string; password: string }) {}
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

export const loginStart = createAction(
  '[Auth] Login Start',
  props<{ email: string; password: string }>()
);
