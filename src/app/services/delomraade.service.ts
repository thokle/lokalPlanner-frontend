import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DelOmraade} from '../models/DelOmraade';

@Injectable({
  providedIn: 'root'
})
export class DelomraadeService {

  private baseUrl = environment.url + environment.port;
  constructor(private  http: HttpClient) { }

  public GetDelomraader(): Observable<DelOmraade[]> {
    const url = this.baseUrl + '/delomraade/all';
    return this.http.get<DelOmraade[]>(url).pipe();
  }

  public  GetDelomraadeById(delomraade: number): Observable<DelOmraade[]> {
    const url = this.baseUrl + '/delomraade/' + delomraade;
    return  this.http.get<DelOmraade[]>(url).pipe();
  }

}
