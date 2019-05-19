import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {User} from './models/user';
import {StamBladObserver} from './stam-blad-observer';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private  stob: StamBladObserver, private  router:  Router) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user: User = JSON.parse(localStorage.getItem('user')) || null;
    if (user !== undefined) {
      return true;
    } else {
     this.router.navigateByUrl('/login');
    }
    this.stob.emitStamBladChange({id: 0});
    return false;
  }
}
