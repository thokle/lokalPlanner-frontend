import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';

import {StamBladObserver} from '../stam-blad-observer';
import {UdsendingkontakterService} from '../services/udsendingkontakter.service';
import {UdsendingkontaktTyper} from '../models/udsendingkontakt-typer';
import {UdsendingKontaktTyperService} from '../services/udsending-kontakt-typer.service';
import {UdsendingKontakter} from '../models/udsending-kontakter';


@Component({
  selector: 'app-udsendingkontakter-dialog',
  templateUrl: './udsendingkontakter-dialog.component.html',
  styleUrls: ['./udsendingkontakter-dialog.component.css']
})
export class UdsendingkontakterDialogComponent {


  form: FormGroup;

kontaktTyper: UdsendingkontaktTyper[] = [];
  selectedValue: number;

  constructor(public dialogRef: MatDialogRef<UdsendingkontakterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:  any,
    private kts: UdsendingKontaktTyperService, private  fb: FormBuilder) {
    this.form = this.fb.group({

      email: ['', [Validators.min(5), Validators.email]],
      navn: ['', Validators.min(5)],
      telefonnummer: ['', Validators.nullValidator],
      type: ['', Validators.nullValidator]
    });
this.setKontaktTyper();
  }





  private  setKontaktTyper() {
    this.kts.getAllUdsendingKontaktTyper().subscribe(value => {
      this.kontaktTyper = value;
    });
  }

  OpretNyKontakt() {
    const controls = this.form.controls;
    const select = this.selectedValue;
    const numberSelecter: Number = Number(this.selectedValue);

    const ud: UdsendingKontakter = {
      mail: controls.email.value, telefonnummer: controls.telefonnummer.value, navn: controls.navn.value,
      bladid: this.data.bladid, type: numberSelecter.valueOf()
    };
  this.dialogRef.close({contact: ud});

  }
}
