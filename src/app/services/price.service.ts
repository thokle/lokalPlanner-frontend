import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {BladpriceView} from '../models/bladprice-view';
import {PriceListItem} from '../models/price-list-item';
import {PlaceringListItem} from '../models/placering-list-item';
import {PriceWeekItem} from '../models/price-week-item';

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

  public GetPriceWeekListPrBladId(bladid, year): Observable<PriceWeekItem[]> {
    const url = this.baseUrl + '/priser/' + bladid + '/add/' + year;
    return  this.http.get<PriceWeekItem[]>(url).pipe();
  }

}
