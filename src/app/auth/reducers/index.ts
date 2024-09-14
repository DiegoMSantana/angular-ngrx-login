import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';

import { User } from '../login/model/user.model';
import { AuthActions } from '../action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User | undefined
}

export const initialAuthState: AuthState = {
  user: undefined
};

/*export const reducers: ActionReducerMap<AuthState> = {
 
};*/


export const authReducer = createReducer(
    initialAuthState,
    on(AuthActions.login, (state, action) => {
      return {
          user: action.user
      }
  })
)


