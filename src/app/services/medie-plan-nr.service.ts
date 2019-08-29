import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MediePlanNr} from '../models/medie-plan-nr';

@Injectable({
  providedIn: 'root'
})
export class MediePlanNrService {

  baseUrl = environment.url + environment.port;
  constructor(private http: HttpClient) { }


  public GetMediePlanLinjer(mediePlan: number): Observable<MediePlanNr[]> {
    const url = this.baseUrl + '/medieplannr/' + mediePlan;
    return  this.http.get<MediePlanNr[]>(url).pipe();
  }

  public  CreateMediePlanLinker(body: MediePlanNr): Observable<any> {
    const url  = this.baseUrl + '/medieplannr/create/';
    return  this.http.post(url, body);
  }
}
