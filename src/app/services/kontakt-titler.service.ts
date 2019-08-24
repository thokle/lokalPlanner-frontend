import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {KontaktTitler} from '../models/kontakt-titler';

@Injectable({
  providedIn: 'root'
})
export class KontaktTitlerService {
  baseUrl = environment.url + environment.port;
  constructor(private http: HttpClient) { }



  public GetKontaktTitle(): Observable<KontaktTitler[]> {
    const url =   this.baseUrl + '/kontaktTitler';
    return this.http.get<KontaktTitler[]>(url).pipe();
  }
}
