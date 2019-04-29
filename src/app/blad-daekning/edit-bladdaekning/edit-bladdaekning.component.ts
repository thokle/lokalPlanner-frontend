import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {StamBladKontaktPersonService} from '../../services/stam-blad-kontakt-person.service';
import {StamBladObserver} from '../../stam-blad-observer';
import {BladDaekning} from '../../models/blad-daekning';
import {BladdaekningService} from '../../services/bladdaekning.service';
import {FormControl} from '@angular/forms';
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

  text = 'Opdater'
  oplag = new FormControl();
  postnummer = new FormControl();
  daekninggrad =  new FormControl();
  psnr: PostNr[];
  opertation;
  updateData: BladDaekning;
  constructor(public dialogRef: MatDialogRef<EditBladdaekningComponent>,
              @Inject(MAT_DIALOG_DATA) public data:  any, private  bs: BladdaekningService, private ps: StamdataService) {
    console.log(this.data[0].selected)
    if (this.data[1].update === 1) {
      this.text = 'Opdater';
      this.opertation = true;
      this.updateData = {BladID1: this.data[0].selected.BladID1, PostNr1:  this.data[0].selected.PostNr1,
        Oplag1:  this.data[0].selected.Oplag1, DaekningsGrad1:  this.data[0].selected.DaekningsGrad1};
    } else if (this.data[1].update === 0) {
      this.text = 'Opret';
      this.opertation = false;
    }
    this.ps.StamBladAllPostnr().subscribe( value => {
      this.psnr = value;
    });
    console.log(data);

  }

  ngOnInit() {

  }

  AddOrUpdateBladDaekning() {

 }

}
