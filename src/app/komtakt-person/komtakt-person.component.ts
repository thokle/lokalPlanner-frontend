import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {StambladKontaktPerson} from '../models/stamblad-kontakt-person';

@Component({
  selector: 'app-komtakt-person',
  templateUrl: './komtakt-person.component.html',
  styleUrls: ['./komtakt-person.component.css']
})
export class KomtaktPersonComponent implements OnInit {

  @Input() bladId: number;

  constructor(
    public dialogRef: MatDialogRef<KomtaktPersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data:   StambladKontaktPerson) {}

  ngOnInit() {
  }

}

