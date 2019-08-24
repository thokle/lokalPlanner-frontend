import {Component, Inject, OnInit} from '@angular/core';
import {PriceService} from '../services/price.service';
import {StamBladObserver} from '../stam-blad-observer';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PriceListItem} from '../models/price-list-item';

@Component({
  selector: 'app-price-wee-type-dialog',
  templateUrl: './price-wee-type-dialog.component.html',
  styleUrls: ['./price-wee-type-dialog.component.scss']
})
export class PriceWeeTypeDialogComponent {
  selectedId;
  priceList: PriceListItem[] = [];

  constructor(public dialogRef: MatDialogRef<PriceWeeTypeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data, private ps: PriceService) {
ps.GetPriseItemListe().subscribe(value => {
  this.priceList = value;
});

  }

  update() {
    this.dialogRef.close({data: this.selectedId});
  }

}

