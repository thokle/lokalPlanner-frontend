import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {User} from '../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  name: String = 'Lokalplanner';

  isUserLoggedIn = false;

  hide = false;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.isLoggedIn();
  }

  public showResultat() {
    if ( !this.hide) {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }

  private isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user')) as  User;
    if (user.username !== undefined) {
      this.isUserLoggedIn = true;
    }

  }



  public hideResult() {
    if (this.hide) {
      this.hide = false;
    }
    setTimeout(function () {
      this.hide = false;
    }, 2000);
  }
}
