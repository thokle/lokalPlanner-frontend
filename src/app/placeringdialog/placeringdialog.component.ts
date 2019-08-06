import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-placeringdialog',
  templateUrl: './placeringdialog.component.html',
  styleUrls: ['./placeringdialog.component.css']
})
export class PlaceringdialogComponent implements OnInit {


  selectetPlacering;
  constructor(public dialogRef: MatDialogRef<PlaceringdialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  opret() {
    this.dialogRef.close({text: this.selectetPlacering});
  }

}
