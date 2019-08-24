import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Annonoer} from '../models/annonoer';
import {Bureau} from '../models/bureau';

@Injectable({
  providedIn: 'root'
})
export class BureauService {

  enviroment = environment.production;
  constructor(private  http: HttpClient) { }


  public getBureas(): Observable<Bureau[]> {
    if (!this.enviroment) {
      return this.http.get<Bureau[]>('/assets/data/bureau.json').pipe();
    }
  }
}
