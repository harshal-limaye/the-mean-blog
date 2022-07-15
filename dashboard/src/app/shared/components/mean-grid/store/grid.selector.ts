import { createSelector } from '@ngrx/store';
import { GridState } from './grid.reducer';

export interface AppState {
  gridState: GridState;
}

export const selectGridState = (state: AppState) => state.gridState;

export const selectMetadata = (metadataId: string) =>
  createSelector(selectGridState, (state: GridState) =>
    state[metadataId] ? state[metadataId] : []
  );
