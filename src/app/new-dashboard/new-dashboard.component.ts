import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {StamBladViewModel} from '../models/StamBladViewModel';
import {MediaMatcher} from '@angular/cdk/layout';
import {StamBladObserver} from '../stam-blad-observer';
import {StamdataService} from '../services/stamdata.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {PlaceringServiceService} from '../services/placering-service.service';
import {User} from '../models/user';
import {PlaceringdialogComponent} from '../placeringdialog/placeringdialog.component';
import {AktiveaviserColumnDialogComponent} from '../aktiveaviser-column-dialog/aktiveaviser-column-dialog.component';

@Component({
  selector: 'app-new-dashboard',
  templateUrl: './new-dashboard.component.html',
  styleUrls: ['./new-dashboard.component.css']
})
export class NewDashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  name: String = 'Lokalplanner';
  mode = false;
  value = 'side'
  username;
  isUserLoggedIn = false;
  stanDataList: StamBladViewModel[] = [];
  hide = false;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private  obs: StamBladObserver,
              private st: StamdataService, private dialog: MatDialog, private ps: PlaceringServiceService, private  snack: MatSnackBar) {

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
    this.dialog.open(PlaceringdialogComponent, {height: '10%', width: '20%'}).afterClosed().subscribe(value => {
      this.ps.CreatePlacering({ Betegnelse: value.text }).subscribe(value1 => {
        this.snack.open('Placering er oprettet', '', {duration: 4000});
      }, error1 => {
        this.snack.open('Noget gik galt', '', { duration: 4000});
      });


    });
  }

  openAktiveAviserColumnsDialog() {
    this.dialog.open(AktiveaviserColumnDialogComponent, {width: '30%', height: '20%'});
  }
}
