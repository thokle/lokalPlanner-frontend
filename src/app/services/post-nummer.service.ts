import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {PostNr} from '../models/PostNr';


const httpHeaders = {
  header: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostNummerService {



  baseUrl = environment.url + environment.port;
port = environment.port;
  constructor(private  http: HttpClient) {
  }


  public getAllPostNummer(): Observable<PostNr[]> {
    const url = this.baseUrl + `/postnr/getall/`;
    return this.http.get<PostNr[]>(url, {  headers : { 'Content-tupe': 'application/json' }}).pipe();
  }

}
