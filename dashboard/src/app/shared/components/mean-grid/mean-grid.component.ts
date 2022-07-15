import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IColumnDef, IOptions } from './mean-grid.interface';
import { loadMetadata } from './store/grid.actions';
import { AppState, selectMetadata } from './store/grid.selector';

@Component({
  selector: 'mean-grid',
  templateUrl: './mean-grid.component.html',
  styleUrls: ['./mean-grid.component.scss'],
})
export class MeanGridComponent implements OnInit {
  @Input() options: IOptions;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.initializeMetadata();
  }

  initializeMetadata(): void {
    this.store
      .select(selectMetadata(this.options.metadata))
      .subscribe((colDefs: IColumnDef[]) => console.log(colDefs));

    this.store.dispatch(loadMetadata({ metadataId: this.options.metadata }));
  }
}
