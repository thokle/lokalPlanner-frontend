import { Component, OnInit } from '@angular/core';
import {UdsendingkontakterService} from '../services/udsendingkontakter.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {StamBladObserver} from '../stam-blad-observer';
import {UdsendingKontakterView} from '../models/udsending-kontakter-view';
import {UdsendingkontakterDialogComponent} from '../udsendingkontakter-dialog/udsendingkontakter-dialog.component';
import {StambladkontaktDialogComponent} from '../stambladkontakt-dialog/stambladkontakt-dialog.component';

@Component({


selector: 'app-udsendingkontaktertable',
  templateUrl: './udsendingkontaktertable.component.html',
  styleUrls: ['./udsendingkontaktertable.component.scss']
})
export class UdsendingkontaktertableComponent implements OnInit {

kontaktStamBladData: UdsendingKontakterView[] = [];
bladid = 0 ;
emais: string[] = [];
  constructor(private us: UdsendingkontakterService, private dialog: MatDialog, private obs: StamBladObserver, private  snack: MatSnackBar) {
    this.getKontakter();
  }
  ngOnInit() {

  }


  openOpretKonntakDialog() {
      this.dialog.open(UdsendingkontakterDialogComponent, { data: {bladid: this.bladid }, width: '20%', height: '30%'}).afterClosed().subscribe(value => {
      this.us.CreateUdsendingKontakter(value.contact).subscribe(value1 => {
          this.snack.open('Udsending kontakt er blevet oprettet','' , {duration: 4000});
      this.obs.setKontaktBladId(this.bladid);
     }, error1 => {
        this.snack.open('Der er sket en fejl ' + error1.toString(), '' , {duration: 4000});
        this.getKontakter();
      });
      });
  }

  getKontakter() {
    this.obs.getKontaktBladId().subscribe( va => {
        this.bladid = va;
        console.log('udsending kontakt id ' + this.bladid);
        this.us.GetUdsendingkontakter(this.bladid).subscribe(value => {
          console.log('value  ' + value[0]);
          if ( value[0] === undefined) {
            this.kontaktStamBladData = [];
          }  else {
            this.kontaktStamBladData = value;
          }
        });
    });
  }

  selectedItem(item: UdsendingKontakterView) {
    this.emais.push(item.Email);
  }

  sendEmail() {

  }
}
