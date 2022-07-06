import { createSelector } from '@ngrx/store';
import { UserState } from './auth.reducer';

export interface AuthState {
  authState: UserState;
}

export const selectUserData = (state: AuthState) => state.authState;

export const selectLoginFailure = createSelector(
  selectUserData,
  (state: UserState) => state.failed
);
