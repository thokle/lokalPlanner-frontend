import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UdsendingKontakter} from '../models/udsending-kontakter';
import {UdsendingKontakterView} from '../models/udsending-kontakter-view';

@Injectable({
  providedIn: 'root'
})
export class UdsendingkontakterService {


  private  baseUrl = environment.url + environment.port;
  constructor(private  http: HttpClient) { }

  public GetUdsendingkontakter(bladid: number): Observable<UdsendingKontakterView[]> {
    const url = this.baseUrl + '/udsendingkontakter/' + bladid;
    return this.http.get<UdsendingKontakterView[]>(url).pipe();

  }

  public CreateUdsendingKontakter(udsendingkontakt: UdsendingKontakter): Observable<any> {
    console.log('CreateUdsendingKontakter  ' + udsendingkontakt);
    const url = this.baseUrl + '/udsendingkontakter/';
    return  this.http.post(url, udsendingkontakt, {
      headers:  new HttpHeaders({

      })


    } ).pipe();
  }
}
