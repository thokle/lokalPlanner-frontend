import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StambladKontaktPerson} from '../models/stamblad-kontakt-person';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StamBladKontaktPersonService {

  baseUrl = environment.url + ':' + environment.port;

  constructor(private http: HttpClient) { }

  public GetStamBladKontakts(bladid: number): Observable<StambladKontaktPerson[]> {
   const url =  this.baseUrl + '/stambladKontaktPersoner/' + bladid;
   return this.http.get<StambladKontaktPerson[]>(url).pipe();

  }

  public CreateStamBladKontaktPerson(kontaktPerson: StambladKontaktPerson): Observable<any> {
    const url = this.baseUrl + '/stambladKontaktPersoner/';
    return this.http.post(url, JSON.stringify(kontaktPerson), {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }

}

