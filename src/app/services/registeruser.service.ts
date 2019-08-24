import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  baseUrl = environment.url + environment.port;

  constructor(private http: HttpClient) {
  }

  public creteUser(user: User): Observable<any> {
    const url = this.baseUrl + `/user/create`;
    console.log(url);
    return this.http.post(url, JSON.stringify(user), {
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  public login(usermane: string, password: string): Observable<User> {
    const url = this.baseUrl + '/user/login';
    return this.http.get<User>(url, {headers: {'username': usermane , 'password' : password} } );
  }


}
