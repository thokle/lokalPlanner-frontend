import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-til-booking-dialog',
  templateUrl: './til-booking-dialog.component.html',
  styleUrls: ['./til-booking-dialog.component.scss']
})
export class TilBookingDialogComponent implements OnInit {

  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<TilBookingDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data, private fb: FormBuilder) {
    this.form = this.fb.group({
      annocoer: ['', Validators.required],
      medieplannr: [],
      ugenr: [],
      matrfolger: [],
      matrmodtager: [],
      matleverandoer: [],
      sammeforskelligt: [],
      fakturanem1: [],
      fakturabem2: [],
      tilugeaviserne: [],
      lobendeordre: [],
      overskrift: [],
      billagsblads: [],
      att: [],
      bureauOrdreSeddlerLiggerIIndBakken: [],
      tilSupport: []
    });
  }

  ngOnInit() {
  }


  public send() {

  }

  public udskriv() {

  }
}
