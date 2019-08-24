import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';

import {StamBladObserver} from '../stam-blad-observer';
import {UdsendingkontakterService} from '../services/udsendingkontakter.service';
import {UdsendingkontaktTyper} from '../models/udsendingkontakt-typer';
import {UdsendingKontaktTyperService} from '../services/udsending-kontakt-typer.service';
import {UdsendingKontakter} from '../models/udsending-kontakter';
import {KontaktTitlerService} from '../services/kontakt-titler.service';
import {KontaktTitler} from '../models/kontakt-titler';


@Component({
  selector: 'app-udsendingkontakter-dialog',
  templateUrl: './udsendingkontakter-dialog.component.html',
  styleUrls: ['./udsendingkontakter-dialog.component.scss']
})
export class UdsendingkontakterDialogComponent {


  form: FormGroup;
listKontaktTitler: KontaktTitler[] = [];
kontaktTyper: UdsendingkontaktTyper[] = [];
  selectedValue: number;
selectedTitel: number;
  constructor(public dialogRef: MatDialogRef<UdsendingkontakterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:  any,
    private kts: UdsendingKontaktTyperService, private  fb: FormBuilder, private  ts: KontaktTitlerService) {
    this.form = this.fb.group({

      email: ['', [Validators.min(5), Validators.email]],
      navn: ['', Validators.min(5)],
      telefonnummer: ['', Validators.nullValidator],
      type: ['', Validators.nullValidator],
      kontaktTitel: ['', Validators.nullValidator]
    });
this.setKontaktTyper();
this.setKontaktTitler();
  }




 private  setKontaktTitler() {
    this.ts.GetKontaktTitle().subscribe(value => {
      this.listKontaktTitler = value;
    });
 }
  private  setKontaktTyper() {
    this.kts.getAllUdsendingKontaktTyper().subscribe(value => {
      this.kontaktTyper = value;
    });
  }

  OpretNyKontakt() {
    const controls = this.form.controls;

    const numberSelecter: Number = Number(this.selectedValue);
const selectedTitelId: Number = Number(this.selectedTitel);
    const ud: UdsendingKontakter = {
      mail: controls.email.value, telefonnummer: controls.telefonnummer.value, navn: controls.navn.value,
      bladid: this.data.bladid, type: numberSelecter.valueOf(), titel: selectedTitelId.valueOf()
    };
  this.dialogRef.close({contact: ud});

  }
}
