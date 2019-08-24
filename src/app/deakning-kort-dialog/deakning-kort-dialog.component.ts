import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-deakning-kort-dialog',
  templateUrl: './deakning-kort-dialog.component.html',
  styleUrls: ['./deakning-kort-dialog.component.scss']
})
export class DeakningKortDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeakningKortDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
