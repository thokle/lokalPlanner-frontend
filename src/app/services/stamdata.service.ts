import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StamData} from '../models/Stamdata';


@Injectable({
  providedIn: 'root'
})
export class StamdataService {



  constructor(public  http: HttpClient) {
  }


  public getStamBladById(bladid: number): Observable<StamData[]> {

    return this.http.get<StamData[]>('').pipe();
  }


}
