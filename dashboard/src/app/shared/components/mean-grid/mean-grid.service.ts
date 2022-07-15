import { Injectable } from '@angular/core';
import { HttpService } from '@shared/services/http.service';
import { environment } from '@env/environment';

import { map, Observable } from 'rxjs';
import { IColumnDef } from './mean-grid.interface';

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
      `${environment.apiUrl}/metadata/${metadataId}`
    );
  }
}
