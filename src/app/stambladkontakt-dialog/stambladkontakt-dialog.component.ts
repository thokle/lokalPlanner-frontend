import {Component, Inject, Input, OnInit} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {StambladKontaktPerson} from '../models/stamblad-kontakt-person';
import {StamBladKontaktPersonService} from '../services/stam-blad-kontakt-person.service';
import {StamBladObserver} from '../stam-blad-observer';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-stambladkontakt-dialog',
  templateUrl: './stambladkontakt-dialog.component.html',
  styleUrls: ['./stambladkontakt-dialog.component.css']
})
export class StambladkontaktDialogComponent {

  form: FormGroup;


  @Input()

  bladId;
  constructor(
    public dialogRef: MatDialogRef<StambladkontaktDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:  any, private kt: StamBladKontaktPersonService, private  obs: StamBladObserver, private  snack: MatSnackBar, private  fb: FormBuilder) {
      this.form = this.fb.group({
        KontakPersonEmail: ['', [Validators.min(5), Validators.email]],
        KontakPersonNavn: ['', Validators.min(5)],
        KontakPersonTelefon: ['', Validators.nullValidator],
        KontakPersonTitel: ['', Validators.nullValidator]
      });

  }


  OpRetKontaktPerson() {

    const kontakt: StambladKontaktPerson  = {
        KontakPersonEmail: this.form.controls.KontakPersonEmail.value,
      KontakPersonNavn: this.form.controls.kontakPersonNavn.value,
      KontakPersonTelefon: this.form.controls.kontakPersonTelefon.value,
      KontakPersonTitel: this.form.controls.selectedTitlel.value,
      StamBladId: this.data.bladid

    };
    this.kt.CreateStamBladKontaktPerson(kontakt).subscribe( value => {console.log('opret kontak value ' + value);
      this.dialogRef.close({'contact': 'created'});
    }, error1 => {
      console.log(error1);
    });
  }
}
