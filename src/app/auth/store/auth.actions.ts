import { Action, createAction, props } from '@ngrx/store';

// *** old syntax ***
// export const LOGIN_START = '[Auth] Login Start';
// export const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
// export const AUTHENTICATE_FAIL = '[Auth] Authenticate Fail';
// export const SIGNUP_START = '[Auth] Signup Start';
// export const LOGOUT = '[Auth] Logout';

// export class AuthenticateSuccess implements Action {
//   readonly type = AUTHENTICATE_SUCCESS;

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

// export class AuthenticateFail implements Action {
//   readonly type = AUTHENTICATE_FAIL;

//   constructor(public payload: string) {}
// }

// export class SignupStart implements Action {
//   readonly type = SIGNUP_START;

//   constructor(public payload: { email: string; password: string }) {}
// }

// export type AuthActions =
//   | AuthenticateSuccess
//   | Logout
//   | LoginStart
//   | AuthenticateFail
//   | SignupStart;

// *** new syntax ***
export const authenticateSuccess = createAction(
  '[Auth] Authenticate Success',
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

export const authenticateFail = createAction(
  '[Auth] Authenticate Fail',
  props<{ error: string }>()
);

export const signupStart = createAction(
  '[Auth] Signup Start',
  props<{ email: string; password: string }>()
);
