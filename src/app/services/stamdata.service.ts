import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StamData} from '../models/Stamdata';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StamdataService {

  baseUrl = environment.url

  constructor(public  http: HttpClient) {
  }


  public getStamBladById(bladid: number): Observable<StamData> {

   const  url = this.baseUrl + `/stamblad/${bladid}`;
    return this.http.get<StamData>(url).pipe();
  }


}
