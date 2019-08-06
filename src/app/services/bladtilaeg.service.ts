import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bladtillaegs} from '../models/bladtillaegs';
import {b} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class BladtilaegService {

  private  baseUrl = environment.url + environment.port;
  constructor(private  http: HttpClient) { }

  public GetBladTilLaegsByBladId(bladid: number): Observable<Bladtillaegs[]> {
    const url = this.baseUrl + '/bladtillaegbybladid/' + bladid;
    return  this.http.get<Bladtillaegs[]>(url).pipe();
  }


  public CreateTilLaegs(b: Bladtillaegs): Observable<Bladtillaegs[]> {
    const url = this.baseUrl + '/bladtilaeg/';
    return  this.http.post<Bladtillaegs[]>(url, b).pipe();
  }

}
