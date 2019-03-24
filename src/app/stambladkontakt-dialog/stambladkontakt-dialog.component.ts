import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {StambladKontaktPerson} from '../models/stamblad-kontakt-person';
import {StamBladKontaktPersonService} from '../services/stam-blad-kontakt-person.service';

@Component({
  selector: 'app-stambladkontakt-dialog',
  templateUrl: './stambladkontakt-dialog.component.html',
  styleUrls: ['./stambladkontakt-dialog.component.css']
})
export class StambladkontaktDialogComponent implements OnInit {

  @Input() bladId: number;
  kontaktPersonGroup: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<StambladkontaktDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:   StambladKontaktPerson, private kt: StamBladKontaktPersonService, private  fb: FormBuilder) {
    this.fb.group({
      kontakPersonNan: [''],
      kontakPersonEmail: [],
      kontakPersonTelefon: [],
      kontakPersonTitel: []
    });
  }

  ngOnInit() {
  }

  opRetKontaktPerson() {

  }
}
