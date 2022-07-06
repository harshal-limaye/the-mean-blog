import { createAction, props } from '@ngrx/store';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  value?: any;
}

export const login = createAction(
  '[Login Screen] Login',
  props<LoginPayload>()
);

export const success = createAction(
  '[Login Screen] Success',
  props<LoginResponse>()
);

export const failure = createAction(
  '[Login Screen] Failure'
);
