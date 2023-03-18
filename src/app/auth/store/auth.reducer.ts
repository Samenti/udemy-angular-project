import { createReducer, on } from '@ngrx/store';
import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
}

const initialState: State = {
  user: null,
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
//       };
//     case AuthActions.LOGOUT:
//       return {
//         ...state,
//         user: null,
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
    };
  }),
  on(AuthActions.logout, (state) => ({
    ...state,
    user: null,
  }))
);
