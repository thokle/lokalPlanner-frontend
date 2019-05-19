import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BladDaekning} from '../models/blad-daekning';

@Injectable({
  providedIn: 'root'
})
export class BladdaekningService {
  baseurl = environment.url + environment.port;

  constructor(private http: HttpClient) {
  }


  public getByBladId(bladid): Observable<BladDaekning[]> {
    const url = this.baseurl + '/bladdaekning/bladid/' + bladid;
    return this.http.get<BladDaekning[]>(url).pipe();
  }

  public AddBladDaeknig(bladdaekningp: BladDaekning) {
    const url = this.baseurl + '/bladdaekning/add';
    return this.http.post(url, bladdaekningp, {
      headers: {

      }
    }).pipe();
  }
}

