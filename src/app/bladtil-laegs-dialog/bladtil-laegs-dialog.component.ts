import {Component, Inject, OnInit} from '@angular/core';
import {BladtilaegtypeService} from '../services/bladtilaegtype.service';
import {BladtillaegsType} from '../models/bladtillaegs-type';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-bladtil-laegs-dialog',
  templateUrl: './bladtil-laegs-dialog.component.html',
  styleUrls: ['./bladtil-laegs-dialog.component.scss']
})
export class BladtilLaegsDialogComponent implements OnInit {
  public tillasgsTyper: BladtillaegsType[] = [];
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<BladtilLaegsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any , private blt: BladtilaegtypeService, fb: FormBuilder) {
    this.form = fb.group({
      type: [],
      pris: []
    });
  this.GetBladTIlLaegsTyper();
  }

  ngOnInit() {
  }

  private  GetBladTIlLaegsTyper() {
  this.blt.GetBladTilaegsTyper().subscribe(value => {
    this.tillasgsTyper = value;
  });
  }

  opret() {
    this.dialogRef.close({type: this.form.controls.type.value, pris: this.form.controls.pris.value});
  }
}
