import { createAction, props } from '@ngrx/store';
import { IColumnDef } from '../mean-grid.interface';

export const loadMetadata = createAction(
  '[Mean Grid] Load Metadata',
  props<{ metadataId: string }>()
);

export const metadataLoaded = createAction(
  '[Mean Grid] Metadata Loaded',
  props<{ metadataId: string, columns: IColumnDef[] }>()
);
