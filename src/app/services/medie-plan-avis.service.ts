import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {MediePlanAvisModel} from '../models/medie-plan-avis-model';

@Injectable({
  providedIn: 'root'
})
export class MediePlanAvisService {

  bastUtrl = environment.url + environment.port;
  constructor(private http: HttpClient) { }


  public  getMediePlanAvis(bladid: number, year: number): Observable<MediePlanAvisModel[]> {
    const url = this.bastUtrl + '/medieplanavis/' + bladid + '/' + year;
    return this.http.get<MediePlanAvisModel[]>(url).pipe();
  }
}
