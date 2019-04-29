import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Region} from '../models/Region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

   baseurl  = environment.url + environment.port;

  constructor(private http: HttpClient) { }

  public getAllRegions(): Observable<Region[]> {
    const url = this.baseurl + '/regions/all';
    return  this.http.get<Region[]>(url).pipe();
  }

  public getRegionById(id: number): Observable<Region[]> {
    const url  = this.baseurl  + '/regions/singleregion/' + id;
    return  this.http.get<Region[]>(url).pipe();
  }
}
