import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PriceAsking} from '../models/price-asking';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PriceAskingService} from '../services/price-asking.service';


@Component({
  selector: 'app-price-asking-dialog',
  templateUrl: './price-asking-dialog.component.html',
  styleUrls: ['./price-asking-dialog.component.css']
})
export class PriceAskingDialogComponent implements OnInit {

form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<PriceAskingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {bladid}, private fb: FormBuilder, private pas: PriceAskingService) {
    this.form = this.fb.group({
      email: [],
      telefon: [],
      navn: []
    });
  }

  public createPriceAskingDialog() {
    this.pas.CreateAskingPriceEntity({
      bladid: this.data.bladid,
      email: this.form.controls.email.value,
      telefon: this.form.controls.telefon.value,
      name: this.form.controls.navn.value
    });

  }

  ngOnInit() {
  }

}
