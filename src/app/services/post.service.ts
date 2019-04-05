import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostNrSoegning} from '../models/PostNrSoegning';
import {tap} from 'rxjs/operators';
import {post} from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = environment.url + ':' + environment.port;

  constructor(private  http: HttpClient) {
  }


  public getallPost(postnr: number): Observable<PostNrSoegning[]> {
    const url = this.url + '/postnr/getall';
    return this.http.get<PostNrSoegning[]>(url).pipe();
  }

  public getByNavnByPostnr(postnr: string): Observable<PostNrSoegning[]> {
    const url = this.url + 'postnr/bynavn/' + postnr;
    return this.http.get<PostNrSoegning[]>(url).pipe();
  }

  public getZipCodeByNavn(bynavn: number) {
    const url = this.url + '/postnr/zipcode/' + bynavn;
    return this.http.get<PostNrSoegning[]>(url).pipe();
  }

}


/*

 Get("/postnr/getall", o => service.GetPostNrListe());
        Get("/postnr/bynavn/{postnr:int}", o =>  service.GetByBYPostNr(o.postnr));
            Get("/postnr/zipcode/{by:string}", o => service.GetPostNrAfByNavn(o.by) );
 */
