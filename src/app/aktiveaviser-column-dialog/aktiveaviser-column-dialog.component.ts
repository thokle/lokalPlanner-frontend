import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {cpus} from 'os';
import {StamBladObserver} from '../stam-blad-observer';

@Component({
  selector: 'app-aktiveaviser-column-dialog',
  templateUrl: './aktiveaviser-column-dialog.component.html',
  styleUrls: ['./aktiveaviser-column-dialog.component.css']
})
export class AktiveaviserColumnDialogComponent {
  selectedColumns: string[] = [];
  columnsnames = [
    'PostBy1',
    'Adresse1',
    'Kontaktperson1',
    'Navn1',
    'Navn21',
    'Oplag1',
    'Tlf1',
    'DagNavn1',
    'DaekningsGrad1',
    'GruppeNavn1',
    'MaterialedeadlineRubrik1',
    'MaterialedeadlineTekst1',
    'OrdredeadlineRubrik1',
    'OrdredeadlineTekst1',
    'PostNr1',
    'RegionNavn1',
    'BladID1',
    'CVR1',
    'DelOmraadeNavn1',
    'GeoKodeNavn1',
    'HovedGruppeNavn1'];


  constructor(private dialogRef: MatDialogRef<AktiveaviserColumnDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private sob: StamBladObserver) {
  }


  addName(value: string) {
    console.log(value);
    this.selectedColumns.push(value);
  }

  public close() {
this.sob.setColumnList(this.selectedColumns);
this.dialogRef.close();

  }

}
