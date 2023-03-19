import { createReducer, on } from '@ngrx/store';
import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false,
};

// *** old syntax ***
// export function authReducer(
//   state = initialState,
//   action: AuthActions.AuthActions
// ) {
//   switch (action.type) {
//     case AuthActions.LOGIN:
//       const user = new User(
//         action.payload.email,
//         action.payload.userId,
//         action.payload.token,
//         action.payload.expirationDate
//       );
//       return {
//         ...state,
//         user: user,
//         authError: null,
//         loading: false,
//       };
//     case AuthActions.LOGOUT:
//       return {
//         ...state,
//         user: null,
//       };
//     case AuthActions.LOGIN_START:
//       return {
//         ...state,
//         authError: null,
//         loading: true,
//       };
//     case AuthActions.LOGIN_FAIL:
//       return {
//         ...state,
//         user: null,
//         authError: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// }

// *** new syntax ***
export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, { email, userId, token, expirationDate }) => {
    const user = new User(email, userId, token, expirationDate);
    return {
      ...state,
      user,
      authError: null,
      loading: false,
    };
  }),
  on(AuthActions.logout, (state) => ({
    ...state,
    user: null,
  })),
  on(AuthActions.loginStart, (state) => ({
    ...state,
    authError: null,
    loading: true,
  })),
  on(AuthActions.loginFail, (state, { error }) => ({
    ...state,
    user: null,
    authError: error,
    loading: false,
  }))
);
