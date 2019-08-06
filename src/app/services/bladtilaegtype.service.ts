import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BladtillaegsType} from '../models/bladtillaegs-type';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BladtilaegtypeService {

  baseUrl = environment.url + environment.port;
  constructor(private http: HttpClient) { }


  public CreateBladTillaegsType(bt: BladtillaegsType): Observable<any> {
    const url = this.baseUrl + '/bladtillaegsType/';
    return     this.http.post<Observable<any>>(url,  bt).pipe();
  }

  public  GetBladTilaegsTyper(): Observable<BladtillaegsType[]> {
    const url =  this.baseUrl + '/bladtillaegsType/';
    return this.http.get<BladtillaegsType[]>(url).pipe();
  }


}
