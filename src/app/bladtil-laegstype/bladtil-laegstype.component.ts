import { Component, OnInit, Inject } from '@angular/core';

import {BladtilaegtypeService} from '../services/bladtilaegtype.service';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-bladtil-laegstype',
  templateUrl: './bladtil-laegstype.component.html',
  styleUrls: ['./bladtil-laegstype.component.css']
})
export class BladtilLaegstypeComponent implements OnInit {


  selectedValue;
  constructor( public dialogRef: MatDialogRef<BladtilLaegstypeComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  CreateType() {
   this.dialogRef.close({type: this.selectedValue});
  }



}
