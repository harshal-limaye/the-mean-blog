import { createReducer, on } from '@ngrx/store';
import { IColumnDef } from '../mean-grid.interface';
import { metadataLoaded } from './grid.actions';

export const featureKey = 'gridState';

export interface GridState {
  [key: string]: IColumnDef[];
}

export const initialState = {};

export const gridReducer = createReducer(
  initialState,
  on(metadataLoaded, (state, data) => ({
    ...state,
    [data.metadataId]: data.columns,
  }))
);
