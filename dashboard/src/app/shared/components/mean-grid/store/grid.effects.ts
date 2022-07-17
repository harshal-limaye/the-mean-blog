import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { MeanGridService } from '../services/mean-grid.service';
import { loadMetadata, metadataLoaded } from './grid.actions';

@Injectable()
export class GridEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMetadata),
      switchMap(({ metadataId }) =>
        this.gridService.getMetadata(metadataId).pipe(
          map((response) =>
            metadataLoaded({
              metadataId,
              columns: response,
            })
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly gridService: MeanGridService
  ) {}
}
