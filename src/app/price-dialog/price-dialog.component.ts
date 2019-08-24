import {Component, Inject, OnInit} from '@angular/core';
import {PriceService} from '../services/price.service';
import {PriceListItem} from '../models/price-list-item';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-price-dialog',
  templateUrl: './price-dialog.component.html',
  styleUrls: ['./price-dialog.component.scss']
})
export class PriceDialogComponent {

selectedListId;
selectedyear;
  bladId;
years: number[] = [];

  priseListItemns: PriceListItem[];
  constructor( public dialogRef: MatDialogRef<PriceDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data:  any, private  ps: PriceService) {
    ps.GetPriseItemListe().subscribe(value => {
      this.priseListItemns  = value;
    });
this.setYears();
  }


  close() {
    this.dialogRef.close({'resultat': [{'selectedItemId' : this.selectedListId, 'year': this.selectedyear}]});
  }


  setYears() {
    for ( let i = 2000;  i <= 2030; i++) {
      this.years.push(i);
    }
  }



}
