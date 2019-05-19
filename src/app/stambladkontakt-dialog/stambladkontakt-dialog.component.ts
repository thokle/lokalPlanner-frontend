import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {StambladKontaktPerson} from '../models/stamblad-kontakt-person';
import {StamBladKontaktPersonService} from '../services/stam-blad-kontakt-person.service';
import {StamBladObserver} from '../stam-blad-observer';

@Component({
  selector: 'app-stambladkontakt-dialog',
  templateUrl: './stambladkontakt-dialog.component.html',
  styleUrls: ['./stambladkontakt-dialog.component.css']
})
export class StambladkontaktDialogComponent {



  kontakPersonNavn = new FormControl();
  kontakPersonEmail =  new FormControl();
  kontakPersonTelefon =  new FormControl();
  kontakPersonTitel = new FormControl();
  selectedTitlel;
  @Input()
  bladId;
  constructor(
    public dialogRef: MatDialogRef<StambladkontaktDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:  any, private kt: StamBladKontaktPersonService, private  obs: StamBladObserver, private  snack: MatSnackBar) {


  }


  OpRetKontaktPerson() {
    console.log(this.kontakPersonEmail.value)
    const kontakt: StambladKontaktPerson  = {
        KontakPersonEmail: this.kontakPersonEmail.value,
      KontakPersonNavn: this.kontakPersonNavn.value,
      KontakPersonTelefon: this.kontakPersonTelefon.value,
      KontakPersonTitel: this.selectedTitlel,
      StamBladId: this.data.bladid

    };
    this.kt.CreateStamBladKontaktPerson(kontakt).subscribe( value => {
      this.dialogRef.close({'contact': 'crated'});
    }, error1 => {
      console.log(error1);
    });
  }
}
