import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BladKommentar} from '../models/blad-kommentar';

@Injectable({
  providedIn: 'root'
})
export class KommentarService {

  baseUrl = environment.url + environment.port;
  constructor(private  http: HttpClient) { }

  public GetKommentare(bladid): Observable<BladKommentar[]> {
   const url = this.baseUrl + '/kommentar/' + bladid;
    return this.http.get<BladKommentar[]>(url).pipe();
   }


   public  CreateKommentart(blad: BladKommentar): Observable<any> {
    const url = this.baseUrl + ' /kommentar';
    return this.http.post(url, blad, { headers: new HttpHeaders({'Content-type': 'application/json'})
    }).pipe();
   }
}
