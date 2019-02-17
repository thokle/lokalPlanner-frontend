import {ChangeDetectorRef, Component, Input, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {getMatIconFailedToSanitizeLiteralError} from '@angular/material';
import {element} from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  name: String = 'Lokalplanner';


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

  public showResultat() {
    if(!this.hide) {
      this.hide = true;
    } else {
      this.hide = false;
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
