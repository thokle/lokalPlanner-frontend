import {Component, Inject, OnInit} from '@angular/core';
import {KommentarService} from '../services/kommentar.service';
import {BladKommentar} from '../models/blad-kommentar';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-bladkommentar',
  templateUrl: './bladkommentar.component.html',
  styleUrls: ['./bladkommentar.component.css']
})
export class BladkommentarComponent implements OnInit {


  list: BladKommentar[];
  form: FormGroup;
  constructor(private dialogRef: MatDialogRef<BladkommentarComponent>,  @Inject(MAT_DIALOG_DATA) public data:  any,
              private  ko: KommentarService, private fb: FormBuilder) {
    this.form = this.fb.group({
      'text': new FormControl(),
    });
  }

  ngOnInit() {
  }

  private  GetKommentar() {
    this.ko.CreateKommentart(this.data.bladid).subscribe( value => {
      this.list = value;
    });
  }

  private  SetKommentar() {
      const kommentart: BladKommentar = {bladid: this.data.bladid, text: this.form.controls['text'].value, date: Date() };
      this.ko.CreateKommentart(kommentart).subscribe(value => {
      }, error1 => {

      }, () => {

      });

  }



}
