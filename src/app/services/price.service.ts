import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {BladpriceView} from '../models/bladprice-view';
import {PriceListItem} from '../models/price-list-item';
import {PlaceringListItem} from '../models/placering-list-item';
import {PriceWeekItem} from '../models/price-week-item';
import {Prisers} from '../models/Prisers';
import {tryCatch} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  baseUrl = environment.url + environment.port;
  constructor(private http: HttpClient) { }

  public GetPriserByBladId(bladid): Observable<BladpriceView[]>  {
    const url = this.baseUrl + '/priser/bladpriser/' + bladid;
    return  this.http.get<BladpriceView[]>(url).pipe();
  }

  public GetPriseItemListe(): Observable<PriceListItem[]> {
    const url = this.baseUrl + '/priser/prislister';
    return  this.http.get<PriceListItem[]>(url).pipe();
  }

  public  GetPlaceringListItem(): Observable<PlaceringListItem[]> {
    const url = this.baseUrl + '/priser/placering';
    return  this.http.get<PlaceringListItem[]>(url).pipe();
  }

  public GetPriceWeekListPrBladId(bladid: number, year: number): Observable<PriceWeekItem[]> {
    const url = this.baseUrl + '/priser/' + bladid + '/add/' + year;
    return  this.http.get<PriceWeekItem[]>(url).pipe();
  }

  public GetPriserByPosition(bladid: number, placeringid: number, aarm: number, prslisteid: number): Observable<Prisers[]> {
    console.log('' + bladid + ' ' +  placeringid + ' ' + aarm + ' ' + prslisteid);
    const url = this.baseUrl + '/priser/' + bladid + '/' + placeringid + '/' + aarm + '/' + prslisteid;

    return this.http.get<Prisers[]>(url).pipe();
  }

  public updatePriceIdOnWeek(pv: PriceWeekItem): Observable<any> {
console.log('Update Priser pr week ' + pv );
    const url  = this.baseUrl + '/priser/updateWeek/' + pv.BladID + '/' + pv.PrislisteID + '/' + pv.Uige + '/' + pv.AAr;
    return  this.http.get(url).pipe();
  }

  public createWeeksPrices(bladid: number, listid: number, year: number): Observable<any> {
      const url = this.baseUrl + '/priser/createPriserPrUge/' + bladid + '/' + listid  +  '/' + year ;
      return   this.http.get<any>(url ).pipe();
  }

  public createPriserTable(psl: Prisers): Observable<any> {
    const url = this.baseUrl + '/priser/priserPrisListPrBladPrAar';

    return  this.http.post(url, psl, {}).pipe();
  }
}
