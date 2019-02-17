import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StamData} from '../models/Stamdata';
import {environment} from '../../environments/environment';
import {Dage} from '../models/Dage';
import {Region} from '../models/Region';
import {PostNrSoegning} from '../models/PostNrSoegning';
import {GeoKode} from '../models/GeoKode';

const httpHeaders = {
  header: new HttpHeaders({
    'Content-type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class StamdataService {

  baseUrl = environment.url;


  constructor(public  http: HttpClient) {
  }


  public getStamBladById(bladid: number): Observable<StamData> {

    const url = this.baseUrl + `/stamblad/${bladid}`;
    return this.http.get<StamData>(url).pipe();
  }

  public getStabbladByName(name: string): Observable<StamData> {
    const url = this.baseUrl + `/stamblad/navn/${name}`;
    return this.http.get<StamData>(url).pipe();
  }

  public createStamblad(stamblad: StamData): Observable<StamData> {
    const url = this.baseUrl + `/stamblad`;
    return this.http.post<StamData>(url, JSON.stringify(stamblad), {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }).pipe();
  }

  public StamBladGeoCodes(): Observable<GeoKode[]> {
    const url = this.baseUrl + '';
    return this.http.get<GeoKode[]>(url).pipe();
  }


  public StamBladAllPostnr() {
      const url = this.baseUrl  + `/stamblad/allpostnr`;
      
  }

  public StamBladPostnrSoeg(): Observable<PostNrSoegning[]> {
    const url = this.baseUrl + '/stamblad/postnrsoegning';
    return this.http.get<PostNrSoegning[]>(url).pipe();

  }

  public StamBladRegions(): Observable<Region[]> {
    const url = this.baseUrl + '';
    return this.http.get<Region[]>(url).pipe();

  }

  public StamBladDage(): Observable<Dage[]> {
    const url = this.baseUrl + '/stamblad/dage';
    return this.http.get<Dage[]>(url).pipe();
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


