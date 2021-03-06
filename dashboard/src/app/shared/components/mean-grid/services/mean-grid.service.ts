import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '@shared/services/http.service';
import { environment as env } from '@env/environment';
import { IColumnDef } from '../mean-grid.interface';

interface IResponse {
  type: string;
  id: string;
  value: IColumnDef;
}

@Injectable({
  providedIn: 'root',
})
export class MeanGridService {
  constructor(private readonly http: HttpService) {}

  getMetadata(metadataId: string): Observable<IColumnDef[]> {
    return this.http.get<IColumnDef[]>(
      `${env.apiUrl}metadata/${metadataId}`
    );
  }

  getRowData(endpoint: string): Observable<any[]> {
    return this.http.get(`${env.apiUrl}${endpoint}`);
  }
}
