import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlaceringModel} from '../models/placering-model';

@Injectable({
  providedIn: 'root'
})
export class PlaceringServiceService {

  baseUrl = environment.url + environment.port
  constructor(private http: HttpClient ) { }


public getPlaceringer(): Observable<PlaceringModel[]> {
    const url = this.baseUrl + '/placeringer';
    return  this.http.get<PlaceringModel[]>(url).pipe();
}

public  CreatePlacering(tbl: PlaceringModel): Observable<any> {
    const url = this.baseUrl + '/placeringer';
    return  this.http.post<any>(url, tbl).pipe();
}
}
