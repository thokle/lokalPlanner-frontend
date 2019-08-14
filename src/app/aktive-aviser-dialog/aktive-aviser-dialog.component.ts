import {Component, OnInit, ViewChild} from '@angular/core';
import {AktiveAviser} from '../models/aktive-aviser';
import {AktiveaviserService} from '../services/aktiveaviser.service';
import {MatDialog, MatTable, MatTableDataSource} from '@angular/material';
import {FormControl} from '@angular/forms';

import {AktiveaviserColumnDialogComponent} from '../aktiveaviser-column-dialog/aktiveaviser-column-dialog.component';
import {StamBladObserver} from '../stam-blad-observer';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import {JsonUtilService} from '../services/json-util.service';

@Component({
  selector: 'app-aktive-aviser-dialog',
  templateUrl: './aktive-aviser-dialog.component.html',
  styleUrls: ['./aktive-aviser-dialog.component.css']
})
export class AktiveAviserDialogComponent implements OnInit {

  @ViewChild('table') table: MatTable<AktiveAviser>;
  dataSoure: MatTableDataSource<AktiveAviser>;
  favoriteSeason: string;
  seasons: string[] = ['bynavn', 'daekning'];
  PostBy1: FormControl = new FormControl('');
  Adresse1: FormControl = new FormControl('');
  Kontaktperson1: FormControl = new FormControl('');
  Navn1: FormControl = new FormControl('');
  Navn21: FormControl = new FormControl('');
  Oplag1: FormControl = new FormControl('');
  Tlf1: FormControl = new FormControl('');
  DagNavn1: FormControl = new FormControl('');
  DaekningsGrad1: FormControl = new FormControl('');
  GruppeNavn1: FormControl = new FormControl('');
  MaterialedeadlineRubrik1: FormControl = new FormControl('');
  MaterialedeadlineTekst1: FormControl = new FormControl('');
  OrdredeadlineRubrik1: FormControl = new FormControl('');
  OrdredeadlineTekst1: FormControl = new FormControl('');
  PostNr1: FormControl = new FormControl('');
  RegionNavn1: FormControl = new FormControl('');
  BladID1: FormControl = new FormControl('');
  CVR1: FormControl = new FormControl('');
  DelOmraadeNavn1: FormControl = new FormControl('');
  GeoKodeNavn1: FormControl = new FormControl('');
  HovedGruppeNavn1: FormControl = new FormControl('');
  columnsnames = [
    'PostBy1',
    'Adresse1',
    'Kontaktperson1',
    'Navn1',
    'Navn21',
    'Oplag1',
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


  filterValues = {
    PostBy1: '',
    Adresse1: '',
    Kontaktperson1: '',
    Navn1: '',
    Navn21: '',
    Oplag1: '',

    DagNavn1: '',
    DaekningsGrad1: '',
    GruppeNavn1: '',
    MaterialedeadlineRubrik1: '',
    MaterialedeadlineTekst1: '',
    OrdredeadlineRubrik1: '',
    OrdredeadlineTekst1: '',
    PostNr1: '',
    RegionNavn1: '',
    BladID1: '',
    CVR1: '',
    DelOmraadeNavn1: '',
    GeoKodeNavn1: '',
    HovedGruppeNavn1: '',
  };

  constructor(private ak: AktiveaviserService, private dialog: MatDialog, private obs: StamBladObserver, private  js: JsonUtilService) {
    this.loadData();
    this.obs.getColumnsList().subscribe(value => {
      this.columnsnames = value;
    });
  }

  private loadData() {
    this.ak.GetAllUgeAvierTilGrid().subscribe(value => {

      this.dataSoure = new MatTableDataSource(value);
      this.dataSoure.filterPredicate = this.createFilter();
    });
    this.obs.getColumnsList().subscribe(value => {
      if (value.length > 0) {
        this.columnsnames = value;
      }
    });
  }

  ngOnInit() {
    this.obs.getColumnsList().subscribe(value => {
      if (value.length > 0) {
        this.columnsnames = value;
      }
    });
    this.Adresse1.valueChanges.subscribe(value => {
      this.filterValues.Adresse1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);


    });
    this.PostBy1.valueChanges.subscribe(value => {
      this.filterValues.PostBy1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });

    this.Kontaktperson1.valueChanges.subscribe(value => {
      this.filterValues.Kontaktperson1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });
    this.Navn1.valueChanges.subscribe(value => {
      this.filterValues.Navn1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });

    this.BladID1.valueChanges.subscribe(value => {
      this.filterValues.BladID1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });
    this.PostNr1.valueChanges.subscribe(value => {
      this.filterValues.PostNr1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });
    this.Oplag1.valueChanges.subscribe(value => {
      this.filterValues.Oplag1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });

    this.DagNavn1.valueChanges.subscribe(value => {
      this.filterValues.DagNavn1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });
    this.DaekningsGrad1.valueChanges.subscribe(value => {
      this.filterValues.DaekningsGrad1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });
    this.GruppeNavn1.valueChanges.subscribe(value => {
      this.filterValues.GruppeNavn1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });
    this.MaterialedeadlineRubrik1.valueChanges.subscribe(value => {
      this.filterValues.MaterialedeadlineRubrik1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });
    this.MaterialedeadlineTekst1.valueChanges.subscribe(value => {
      this.filterValues.MaterialedeadlineTekst1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });
    this.OrdredeadlineRubrik1.valueChanges.subscribe(value => {
      this.filterValues.OrdredeadlineRubrik1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });
    this.OrdredeadlineTekst1.valueChanges.subscribe(value => {
      this.filterValues.OrdredeadlineTekst1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });
    this.RegionNavn1.valueChanges.subscribe(value => {
      this.filterValues.RegionNavn1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });
    this.CVR1.valueChanges.subscribe(value => {
      this.filterValues.CVR1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });
    this.DelOmraadeNavn1.valueChanges.subscribe(value => {
      this.filterValues.DelOmraadeNavn1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });
    this.GeoKodeNavn1.valueChanges.subscribe(value => {
      this.filterValues.GeoKodeNavn1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });
    this.HovedGruppeNavn1.valueChanges.subscribe(value => {
      this.filterValues.HovedGruppeNavn1 = value;
      this.dataSoure.filter = JSON.stringify(this.filterValues);
    });
    this.ak.GetAllUgeAvierTilGrid().subscribe(value => {

      this.dataSoure.data = value;
      this.dataSoure.filterPredicate = this.createFilter();
    });


  }

  createFilter(): (data: any, filter: string) => boolean {
    const filterFunction = function (data, filters): boolean {

      let searchTerms;
      let res;
      try {
        searchTerms = JSON.parse(filters);
        res = data.PostBy1.toString().toLowerCase().indexOf(searchTerms.PostBy1) !== -1
          && data.Adresse1.toString().toLowerCase().indexOf(searchTerms.Adresse1) !== -1
          && data.PostNr1.toString().toLowerCase().indexOf(searchTerms.PostNr1) !== -1
          && data.Navn1.toString().toLowerCase().indexOf(searchTerms.Navn1) !== -1
          && data.BladID1.toString().toLowerCase().indexOf(searchTerms.BladID1) !== -1
          && data.Oplag1.toString().toLowerCase().indexOf(searchTerms.Oplag1) !== -1
          && data.Kontaktperson1.toString().toLowerCase().indexOf(searchTerms.Kontaktperson1) !== 1
          && data.DagNavn1.toString().toLowerCase().indexOf(searchTerms.DagNavn1) !== -1
          && data.DaekningsGrad1.toString().toLowerCase().indexOf(searchTerms.DaekningsGrad1) !== -1
          && data.GruppeNavn1.toString().toLowerCase().indexOf(searchTerms.GruppeNavn1) !== -1
          && data.MaterialedeadlineRubrik1.toString().toLowerCase().indexOf(searchTerms.MaterialedeadlineRubrik1) !== -1
          && data.MaterialedeadlineTekst1.toString().toLowerCase().indexOf(searchTerms.MaterialedeadlineTekst1) !== -1
          && data.OrdredeadlineRubrik1.toString().toLowerCase().indexOf(searchTerms.OrdredeadlineRubrik1) !== -1
          && data.OrdredeadlineTekst1.toString().toLowerCase().indexOf(searchTerms.OrdredeadlineTekst1) !== -1
          && data.RegionNavn1.toString().toLowerCase().indexOf(searchTerms.RegionNavn1) !== -1
          && data.CVR1.toString().toLowerCase().indexOf(searchTerms.CVR1) !== -1
          && data.DelOmraadeNavn1.toString().toLowerCase().indexOf(searchTerms.DelOmraadeNavn1) !== -1
          && data.GeoKodeNavn1.toString().toLowerCase().indexOf(searchTerms.GeoKodeNavn1) !== -1
          && data.HovedGruppeNavn1.toString().toLowerCase().indexOf(searchTerms.HovedGruppeNavn1) !== -1;

      } catch (e) {

      }
      return res;
    };
    return filterFunction;
  }


  private createList(columns: string[]) {
    // create valueStromg
    let value = '';
    columns.forEach(value1 => {
      value = value1 + '||';
    });
    this.columnsnames.filter(value1 => value1 === value);
  }

  public openDialog() {
    const promise = this.dialog.open(AktiveaviserColumnDialogComponent, {
      width: '10vh', height: '80%',
      autoFocus: true, ariaLabel: 'label'
    }).afterClosed().toPromise();
    promise.then(value => console.log(value.text));
  }

  applyFilter(filterValue: any) {
    this.dataSoure.filter = filterValue.trim().toLowerCase();
  }


  dropTable(event: CdkDragDrop<AktiveAviser>) {
    const prevIndex = this.dataSoure.data.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSoure.data, prevIndex, event.currentIndex);
    this.table.renderRows();
  }

  getRowData(row: AktiveAviser) {
    this.obs.setAktivAvis({bladid: row.BladID1, year: 2018});
    console.log('Row data' + row);
  }

  soeg() {
    if (this.favoriteSeason === 'bynavn') {

    } else {

    }
  }

   findByAvisByNavn(bynavn: string) {
    this.ak.GetUgeAviserBy(bynavn).subscribe(value => {
      this.dataSoure.data = value;
    });
  }

  findAviserByDaekningsgrad(daekgrad: number) {
    this.ak.GetUgeAviserByDaekningGrad(daekgrad).subscribe(value => {
      this.dataSoure.data = value;
    });
  }
  groupbyname(name) {
     const  s = this.dataSoure.data.reduce((previousValue, currentValue) => {
       if (!previousValue[currentValue[name]]) {
         previousValue[currentValue[name]] = [currentValue];
       } else {
         previousValue[currentValue[name]].push(currentValue);
       }

       return previousValue;

     }, {});
  console.log(s);
  }

}
