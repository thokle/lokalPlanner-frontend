import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Annonoer} from '../models/annonoer';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  enviroment = environment.production;
  constructor(private http: HttpClient) { }

  public getAnnoncoer(): Observable<Annonoer[]> {
    if (!this.enviroment) {
      return  this.http.get<Annonoer[]>('assets/data/annoncor.json').pipe();
    }
  }
}
