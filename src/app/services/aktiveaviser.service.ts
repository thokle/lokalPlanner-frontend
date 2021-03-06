import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AktiveAviser} from '../models/aktive-aviser';
import {access} from 'fs';

@Injectable({
  providedIn: 'root'
})
export class AktiveaviserService {

  baseurl = environment.url + environment.port;
  constructor(private  http: HttpClient) { }


  public  GetAllUgeAvierTilGrid(): Observable<AktiveAviser[]> {
    const url = this.baseurl + '/AktiveAviser';
    return  this.http.get<AktiveAviser[]>(url).pipe();
  }

  public GetUgeAviserBy(bynavn: string): Observable<AktiveAviser[]> {
    const  url = this.baseurl + '/AktiveAviser/by/' + bynavn;
    return  this.http.get<AktiveAviser[]>(url).pipe();
  }

  public GetUgeAviserByDaekningGrad(daek: number) {
    const url = this.baseurl + '/AktiveAviser/daek/' + daek;
    return this.http.get<AktiveAviser[]>(url).pipe();
  }
}
