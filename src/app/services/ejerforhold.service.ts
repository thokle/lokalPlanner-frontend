import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ejerforhold} from '../models/ejerforhold';

@Injectable({
  providedIn: 'root'
})
export class EjerforholdService {

  baseurl  = environment.url + environment.port;
  constructor(private http: HttpClient) { }


  public  GetAllEjerforhold(): Observable<Ejerforhold[]> {
    const url  = this.baseurl + '/ejerforhold';
    return  this.http.get<Ejerforhold[]>(url).pipe();

  }
}
