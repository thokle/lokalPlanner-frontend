import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MediePlan} from '../models/medie-plan';

@Injectable({
  providedIn: 'root'
})
export class MediePlanService {
 private baseUrl = environment.url + environment.port;
  constructor(private  http: HttpClient) { }


  public  getMedieplanById(mediePlanNr: number): Observable<MediePlan[]> {
    const url = this.baseUrl + '/mediePlan/medieId/' + mediePlanNr;
    return  this.http.get<MediePlan[]>(url).pipe();
  }


  public  createMediePLan(mediePlan: MediePlan): Observable<any> {
    const  url = this.baseUrl + '/mediePlan/create';
    return this.http.post(url, mediePlan).pipe();
  }

  public findMediePlanToolbar(mediePlan, annoncoer, bureau , fraUge, tilUge, aar, visInAktiveAnnoncer, mediePlanCheckBox, rtAkCheckBox, faktuering): Observable<any[]> {
    const url = this.baseUrl + '/mediePlan/toolbar/' + mediePlan + '/' + annoncoer + '/' + bureau + '/' + fraUge + '/' + tilUge + '/' + aar + '/' + visInAktiveAnnoncer + '/' + mediePlanCheckBox + '/' + rtAkCheckBox + '/' + faktuering;
    return this.http.get<any[]>(url).pipe();
  }

  public getLatestMediePlanId(): Observable<any[]> {
    const url = this.baseUrl + '/mediePlan/getlatestId/';
    console.log(url);
    return this.http.get<any[]>(url).pipe();
}
}
