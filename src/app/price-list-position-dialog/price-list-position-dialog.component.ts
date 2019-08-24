import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PlaceringServiceService} from '../services/placering-service.service';
import {PlaceringModel} from '../models/placering-model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-price-list-position-dialog',
  templateUrl: './price-list-position-dialog.component.html',
  styleUrls: ['./price-list-position-dialog.component.scss']
})
export class PriceListPositionDialogComponent implements OnInit {

  placeringer: PlaceringModel[] = [];
  selectedValue: FormControl = new FormControl();
  constructor(public dialogRef: MatDialogRef<PriceListPositionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data, private pls: PlaceringServiceService) {
    this.setPlacering();
  }

  ngOnInit() {
  }

  setPlacering() {
    this.pls.getPlaceringer().subscribe(value => {
      this.placeringer = value;
    });
  }

  savePlacering() {
    const placerig = JSON.parse(this.selectedValue.value) as PlaceringModel;
    console.log(placerig);
    this.dialogRef.close({PlaceringID: placerig.PlaceringID, Betegnelse: placerig.Betegnelse });
  }
}
