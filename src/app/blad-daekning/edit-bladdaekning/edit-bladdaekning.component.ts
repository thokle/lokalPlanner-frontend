import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {StamBladKontaktPersonService} from '../../services/stam-blad-kontakt-person.service';
import {StamBladObserver} from '../../stam-blad-observer';
import {BladDaekning} from '../../models/blad-daekning';
import {BladdaekningService} from '../../services/bladdaekning.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PostNummerService} from '../../services/post-nummer.service';
import {PostNr} from '../../models/PostNr';
import {StamdataService} from '../../services/stamdata.service';

@Component({
  selector: 'app-edit-bladdaekning',
  templateUrl: './edit-bladdaekning.component.html',
  styleUrls: ['./edit-bladdaekning.component.css']
})
export class EditBladdaekningComponent implements OnInit {

  bladid;

  text = 'Opdater';
  opret = false;
  slet = false;
  opdater = false;
  opertation;
  updateData: BladDaekning;
  form: FormGroup;
  psnr: PostNr[] = [];

  constructor(public dialogRef: MatDialogRef<EditBladdaekningComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private  bs: BladdaekningService,
              private ps: StamdataService, private  snack: MatSnackBar, private fb: FormBuilder) {
    this.form = this.fb.group({
      DaekningsGrad1: ['', Validators.nullValidator],
      PostNr1: ['', Validators.nullValidator],
      Oplag1: ['', Validators.nullValidator],
      Postby: ['', Validators.nullValidator],
      BladID1: ['', Validators.nullValidator]
    });
this.setButtonText(data);
    this.updateData = {
      BladID1: this.data[0].selected.BladID1, PostNr1: this.data[0].selected.PostNr1,
      Oplag1: this.data[0].selected.Oplag1, DaekningsGrad1: this.data[0].selected.DaekningsGrad1, Postby: this.data[0].selected.Postby
    };
    if (this.updateData.BladID1 !== undefined) {
      this.form.setValue(this.updateData);
    }

    this.ps.StamBladAllPostnr().subscribe(value => {
      this.psnr = value;
    });
    console.log(data);

  }


  private setButtonText(data) {
    if (data[1].update === 'slet') {
      this.slet = true;
      this.opret = false;
      this.text = 'Slet';
    } else if (data[2].update === 'opret') {
      this.slet = false;
      this.opret = true;
      this.text = 'Gem';
    } else if (data[1].update === 'opdater') {
      this.slet = false;
      this.opret = false;
      this.opdater = true;
      this.text = 'Opdater';
    }
  }
  ngOnInit() {

  }

  AddOrUpdateBladDaekning() {
    if (this.text === 'Opdater') {
      const postnummer = this.form.controls.PostNr1.value;
      const daekningsgrad = this.form.controls.DaekningsGrad1.value;

      const oplag = this.form.controls.Oplag1.value;
      const bynavne = this.form.controls.Postby.value;
      const opdatering: BladDaekning = {
        BladID1: this.form.controls.BladID1.value, Postby: this.form.controls.Postby.value, PostNr1: this.form.controls.PostNr1.value,
        DaekningsGrad1: this.form.controls.DaekningsGrad1.value, Oplag1: this.form.controls.Oplag1.value
      };
      this.dialogRef.close({'data': opdatering});
    } else if (this.text === 'Opret') {

    }
  }

  deleteDaekning() {
    const opdatering: BladDaekning = {
      BladID1: this.form.controls.BladID1.value, Postby: this.form.controls.Postby.value, PostNr1: this.form.controls.PostNr1.value,
      DaekningsGrad1: this.form.controls.DaekningsGrad1.value, Oplag1: this.form.controls.Oplag1.value
    };
    this.dialogRef.close({'data': opdatering, 'tekst': 'slettet'});


  }

}
