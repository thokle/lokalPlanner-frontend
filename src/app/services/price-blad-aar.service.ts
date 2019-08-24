import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceBladAarService {

  private baseurl = environment.url + environment.port;
  constructor(private  http: HttpClient) { }

  public creaePriceBladPrAar(bladid: number, prislisteId: number, aar: number): Observable<any> {
    const url = this.baseurl + '/praarpriser/' + bladid + '/' + prislisteId + '/' + aar;
      return  this.http.get<any>(url).pipe();
  }
}
