import { createReducer, on } from '@ngrx/store';
import { failure, success } from './auth.actions';

export const featureKey = 'authState';

export interface UserState {
  userData: any;
  loggedIn: boolean;
  failed: boolean;
}

export const initialState: UserState = {
  userData: {},
  loggedIn: false,
  failed: false,
};

export const authReducer = createReducer(
  initialState,
  on(success, (state, r) => ({ userData: r, failed: false, loggedIn: true })),
  on(failure, (state) => ({ userData: {}, loggedIn: false, failed: true }))
);
