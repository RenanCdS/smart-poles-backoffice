import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CondominiumsResponse } from '../dtos/condominiums-response';
import { Condominium } from '../models/condominium';

@Injectable({
  providedIn: 'root'
})
export class CondominiumsService {

  constructor(private readonly http: HttpClient) { }

  getCondominiums(): Observable<Condominium[]> {
    return this.http.get<CondominiumsResponse>(`${environment.api.baseUrl}/condominiums`).pipe(
      map(condominiumsResponse => {
        return condominiumsResponse.condominiums;
      })
    );
  }

  insertCondominium(condominium: Condominium): Observable<any> {
    return this.http.post(`${environment.api.baseUrl}/condominiums`, condominium);
  }

  updateCondominium(condominium: Condominium): Observable<any> {
    return this.http.put(`${environment.api.baseUrl}/condominiums`, condominium);
  }

  deleteCondominium(condominiumCode: number): Observable<any> {
    return this.http.delete(`${environment.api.baseUrl}/condominiums/${condominiumCode}`);
  }
}
