import { Injectable } from '@angular/core';
import {MedieplanLinjer} from '../models/MedieplanLinjer';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediePlanLinjerService {

  baseUrl  = environment.url + environment.port;
  constructor(private http:  HttpClient) { }

  CreateMediePlanLinje(mpl: MedieplanLinjer): Observable<any[]> {
    const url = this.baseUrl + '//';
    return  this.http.post<any[]>(url, mpl, {}).pipe();
  }
}
