import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {UdsendingkontaktTyper} from '../models/udsendingkontakt-typer';

@Injectable({
  providedIn: 'root'
})
export class UdsendingKontaktTyperService {

  baseUrl = environment.url + environment.port;
  constructor(private  http: HttpClient) { }


  public getAllUdsendingKontaktTyper(): Observable<UdsendingkontaktTyper[]> {
    const url = this.baseUrl + '/udsendingKontaktTyper/';
    return  this.http.get<UdsendingkontaktTyper[]>(url).pipe();
  }
}
