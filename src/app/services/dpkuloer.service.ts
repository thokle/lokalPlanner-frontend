import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DPKuloerService {

  private baseUrl = environment.url + environment.port;
  constructor(private  http: HttpClient) { }


  public  getDpKuloer(): Observable<any[]> {
    const url = this.baseUrl + '/dpkuloer';
    return  this.http.get<any[]>(url).pipe();
  }
}
