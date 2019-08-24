import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PriceAsking} from '../models/price-asking';

@Injectable({
  providedIn: 'root'
})
export class PriceAskingService {

  baseurl = environment.url + environment.port;
  constructor(private  http: HttpClient) { }


  public GetPriceAskingByStambladId(bladid: number): Observable<PriceAsking[]> {
    const url = this.baseurl + '/priceasking/' + bladid;
    return this.http.get<PriceAsking[]>(url).pipe();
  }


  public CreateAskingPriceEntity(enity: PriceAsking):  Observable<any> {
    const url = this.baseurl + '/priceasking/create';
    return this.http.post(url, JSON.stringify(enity), {headers: {
        'Content-type': 'application/json'
      }}).pipe();
  }
}
