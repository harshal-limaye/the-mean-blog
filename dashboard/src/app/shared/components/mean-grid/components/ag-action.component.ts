import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  template: `
    <button mat-icon-button [matMenuTriggerFor]="actions">
      <mat-icon>more_vert</mat-icon>
    </button>
    <mat-menu #actions="matMenu">
      <button mat-menu-item (click)="onClick('edit')">
        <mat-icon>app_registration</mat-icon>
        <span>Edit</span>
      </button>
      <button mat-menu-item (click)="onClick('delete')">
        <mat-icon>delete</mat-icon>
        <span>Delete</span>
      </button>
    </mat-menu>
  `,
})
export class AgActionComponent implements ICellRendererAngularComp {
  params: any;

  constructor() {}

  agInit(params: any): void {
    this.params = params;
  }

  onClick(action: string): void {
    this.params.clicked(action, this.params.data);
  }

  refresh(params: any): boolean {
    return true;
  }
}
