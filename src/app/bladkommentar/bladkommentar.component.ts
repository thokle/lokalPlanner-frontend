import {Component, Inject, OnInit} from '@angular/core';
import {KommentarService} from '../services/kommentar.service';
import {BladKommentar} from '../models/blad-kommentar';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-bladkommentar',
  templateUrl: './bladkommentar.component.html',
  styleUrls: ['./bladkommentar.component.scss']
})
export class BladkommentarComponent implements OnInit {


  list: BladKommentar[] = [];
  form: FormGroup;
  constructor(private dialogRef: MatDialogRef<BladkommentarComponent>,  @Inject(MAT_DIALOG_DATA) public data:  any,
              private  ko: KommentarService, private fb: FormBuilder) {
    this.form = this.fb.group({
      text : ['', Validators.nullValidator],
    });
    this.GetKommentar();
  }

  ngOnInit() {

  }

  public  GetKommentar() {
    this.ko.GetKommentare(this.data.bladid).subscribe( value => {
      this.list = value;
    });
  }

  public  SetKommentar() {
    this.dialogRef.close({text: this.form.controls.text.value});

  }



}
