import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {User} from '../models/user';
import {StamBladObserver} from '../stam-blad-observer';
import {StamdataService} from '../services/stamdata.service';
import {StamBladViewModel} from '../models/StamBladViewModel';
import {MatDialog, MatSnackBar} from '@angular/material';
import {PlaceringServiceService} from '../services/placering-service.service';
import {PlaceringdialogComponent} from '../placeringdialog/placeringdialog.component';
import {AktiveAviserDialogComponent} from '../aktive-aviser-dialog/aktive-aviser-dialog.component';
import {AktiveaviserColumnDialogComponent} from '../aktiveaviser-column-dialog/aktiveaviser-column-dialog.component';
import {animate, state, style, trigger} from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
   animations: [
     trigger('findMediePlan', [
       state('open', style({
         width: '100%',
         opacity: 1,
         backgroundColor: 'white',
         height: '200px'
       })),

       state('closed' , style( {
         width: '100px',
         opacity: 0.5,
         backgroundColor: 'green',
         display: 'none'
       }))

     ])
     ,
     trigger('visResultat', [
       state('open', style({

       })),
       state('closed', style({
         display: 'none'
       }))

     ])
   ]
})
export class DashboardComponent implements OnInit, OnDestroy {
hasBackDrop= false;

  isOpen = false;
  isResultat = false;
  mobileQuery: MediaQueryList;
  name: String = 'Lokalplanner';
username;
  isUserLoggedIn = false;
  stanDataList: StamBladViewModel[] = [];
  hide = false;

  private _mobileQueryListener: () => void;
  findMediePlanIsVisable = false;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private  obs: StamBladObserver,
              private st: StamdataService, private dialog: MatDialog, private ps: PlaceringServiceService, private  snack: MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 400px)');
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
      this.username = user.firstname + ' ' + user.lastname;
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

  public  search(text: any) {
    this.st.GetStabbladByName(text).subscribe(value => {
      console.log(value);
    } );
  }

  openPlaceringDialog() {
    this.dialog.open(PlaceringdialogComponent, {height: '20%', width: '20%'}).afterClosed().subscribe(value => {
      this.ps.CreatePlacering({ Betegnelse: value.text }).subscribe(value1 => {
        this.snack.open('Placering er oprettet', '', {duration: 4000});
        }, error1 => {
        this.snack.open('Noget gik galt', '', { duration: 4000});
      });


    });
 }

 openAktiveAviserColumnsDialog() {
    this.dialog.open(AktiveaviserColumnDialogComponent, {width: '30%', height: '20%'})
 }

 findMediePlan() {
   this.isOpen = !this.isOpen;
 }

}
