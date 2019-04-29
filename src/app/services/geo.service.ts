import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GeoKode} from '../models/GeoKode';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  baseurl = environment.url + environment.port;
  constructor(private http: HttpClient) { }

  public GetGeoCode(id: number): Observable<GeoKode[]> {
    const url = this.baseurl + `/geocode/` + id;
    console.log('Geocode service  ' + url);
    return  this.http.get<GeoKode[]>(url).pipe();
  }
}
