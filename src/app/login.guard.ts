import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {User} from './models/user';
import {StamBladObserver} from './stam-blad-observer';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private  stob: StamBladObserver){
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user: User = JSON.parse(localStorage.getItem('user')) || null;
    if (user !== undefined) {
      return true;
    }
    this.stob.emitStamBladChange({id: 0});
    return true;
  }
}
