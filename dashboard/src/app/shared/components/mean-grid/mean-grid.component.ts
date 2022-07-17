import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import { map, Observable, tap } from 'rxjs';
import { ColumnDefinitionService } from './services/column-definition.service';
import { IColumnDef, IOptions } from './mean-grid.interface';
import { MeanGridService } from './services/mean-grid.service';
import { loadMetadata } from './store/grid.actions';
import { AppState, selectMetadata } from './store/grid.selector';
import { AgActionComponent } from './components/ag-action.component';

interface IAction {
  action: string;
  data?: any;
}

@Component({
  selector: 'mean-grid',
  templateUrl: './mean-grid.component.html',
  styleUrls: ['./mean-grid.component.scss'],
})
export class MeanGridComponent implements OnInit {
  @Input() options: IOptions;

  @Output() onAction: EventEmitter<IAction> = new EventEmitter<IAction>();
  @Output() onGridReady: EventEmitter<any> = new EventEmitter();
  @Output() onGridDataLoadaed: EventEmitter<any> = new EventEmitter();

  rowData$: Observable<any[]>;
  colDefs: ColDef[] = [];
  api: { grid: GridApi; col: ColumnApi };

  get height(): number {
    return this.el.nativeElement.offsetWidth;
  }

  constructor(
    private readonly el: ElementRef,
    private readonly colDefService: ColumnDefinitionService,
    private readonly gridService: MeanGridService,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.initializeMetadata();
    this.initializeRowData();
  }

  initializeMetadata(): void {
    this.colDefService
      .getColDefs(this.options)
      .pipe(map((cols) => [...cols, this.setActionColumn()]))
      .subscribe((colDefs: ColDef[]) => (this.colDefs = colDefs));

    this.store.dispatch(loadMetadata({ metadataId: this.options.metadata }));
  }

  initializeRowData(): void {
    this.rowData$ = this.gridService.getRowData('categories').pipe(
      tap(() => {
        this.onGridDataLoadaed.emit(true);
        this.options.resizeToFit && this.api.col.sizeColumnsToFit(this.height);
      })
    );
  }

  gridReady($event: any): void {
    this.api = { grid: $event.api, col: $event.columnApi };
    this.onGridReady.emit($event);
  }

  onClickCreate(): void {
    this.takeAction('create');
  }

  onClickExcel(): void {
    this.api.grid.exportDataAsCsv();
  }

  setActionColumn(): ColDef {
    return {
      field: 'action',
      cellRenderer: AgActionComponent,
      cellRendererParams: {
        clicked: (action: string, data: any) => this.takeAction(action, data),
      },
    };
  }

  takeAction(action: string, data: any = null) {
    this.onAction.emit({ action, data });
  }
}
