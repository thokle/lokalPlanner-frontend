import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StambladKontaktPerson} from '../models/stamblad-kontakt-person';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StamBladKontaktPersonService {

  baseUrl = environment.url  + environment.port;

  constructor(private http: HttpClient) { }

  public GetStamBladKontakts(bladid: number): Observable<StambladKontaktPerson[]> {
   const url =  this.baseUrl + '/stambladkontakter/' + bladid;
   return this.http.get<StambladKontaktPerson[]>(url).pipe();

  }

  public CreateStamBladKontaktPerson(kontaktPerson: StambladKontaktPerson): Observable<any> {
    console.log(kontaktPerson);
    const url = this.baseUrl + '/stambladkontakter/add';
    return this.http.post(url, kontaktPerson, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }

}

