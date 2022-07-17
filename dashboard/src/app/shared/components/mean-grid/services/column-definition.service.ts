import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColDef } from 'ag-grid-community';
import { map, Observable } from 'rxjs';
import { IColumnDef } from '../mean-grid.interface';
import { AppState, selectMetadata } from '../store/grid.selector';

@Injectable({ providedIn: 'root' })
export class ColumnDefinitionService {

  constructor(private readonly store: Store<AppState>) {}

  format(columns: ColDef[]) {
    return [...columns].map((c) => this.merge(c));
  }

  merge(columnDefs: ColDef): ColDef {
    return {
      ...columnDefs,
      resizable: true,
      sortingOrder: ['asc', 'desc']
    };
  }

  getColDefs(options: any): Observable<ColDef[]> {
    return this.store
    .select(selectMetadata(options.metadata))
    .pipe(
      map((cols: IColumnDef[]) => this.format(cols))
    )
  }
}
