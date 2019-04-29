import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StamData} from '../models/Stamdata';
import {environment} from '../../environments/environment';
import {Dage} from '../models/Dage';
import {Region} from '../models/Region';

import {GeoKode} from '../models/GeoKode';
import {PostNr} from '../models/PostNr';
import {map, tap} from 'rxjs/operators';
import {StamBladViewModel} from '../models/StamBladViewModel';
import {encode} from 'punycode';

const httpHeaders = {
  header: new HttpHeaders({
    'Content-type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class StamdataService {

  baseUrl = environment.url + environment.port;


  constructor(public  http: HttpClient) {
  }

  public getStamBladById(bladid: any): Observable<StamBladViewModel[]> {
    const url = this.baseUrl + '/stamblad/' + bladid.id;
    return this.http.get<StamBladViewModel[]>(url).pipe();
  }

  public getStabbladByName(name: string): Observable<StamBladViewModel> {
    const url = this.baseUrl + `/stamblad/navn/${name}`;
    return this.http.get<StamBladViewModel>(url).pipe();
  }

  public createStamblad(stamblad: StamData): Observable<StamData> {
    const url = this.baseUrl + `/stamblad`;
    return this.http.post<StamData>(url, stamblad, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }).pipe();
  }

  public StamBladGeoCodes(): Observable<GeoKode[]> {
    const url = this.baseUrl + `/stamblad/GeoCodes/`;
    return this.http.get<GeoKode[]>(url).pipe();
  }

  public StamBladAllPostnr(): Observable<PostNr[]> {
      const url = this.baseUrl  + '/stamblad/allpostnr';
      return this.http.get<PostNr[]>(url).pipe();
  }


  public StamBladRegions(): Observable<Region[]> {
    const url = this.baseUrl + `/stamblad/regions`;
    return this.http.get<Region[]>(url).pipe();

  }

  public StamBladDage(): Observable<Dage[]> {
    const url = this.baseUrl + `/stamblad/dage`;
    return this.http.get<Dage[]>(url).pipe();
  }

  public GetAntalStamBlad(): Observable<any> {
    const url = this.baseUrl + `/stamblad/antalblade`;
    return this.http.get<any>(url).pipe();
  }

 public  GetLastestStamBladId(): Observable<any> {
    const url = this.baseUrl + `/stamblad/latestid`;
    return this.http.get<any>(url).pipe();
 }

 public  GetStamBladByEjerforHold(ejerforhold: string): Observable<StamBladViewModel[]>  {
    const url = this.baseUrl + '/stamblad/ejerforhold/';
    return  this.http.get<StamBladViewModel[]>(url, {headers: {'ejerforhold': ejerforhold }} ).pipe();
 }
}
//   Get("/stamblad/GeoCodes", o => { return stamBladDao.GetTableGeoCode(); });
//
// Get("/stamblad/allpostnr", o => { return stamBladDao.GetTablePostNr(); });
//
// Get("/stamblad/postnrsog", o => { return stamBladDao.GetTablePostNrSøgning(); });
//
// Get("/stamblad/regions", o => { return stamBladDao.GetTableRegion(); });
//
//
// Get("/stamblad/dage", o => { return stamBladDao.GetTableDage(); });


