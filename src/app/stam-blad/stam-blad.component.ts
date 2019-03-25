import {Component, OnInit} from '@angular/core';
import {StamdataService} from '../services/stamdata.service';

import {Dage} from '../models/Dage';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StamBladObserver} from '../stam-blad-observer';
import {StamData} from '../models/Stamdata';
import {PostNr} from '../models/PostNr';
import {PostNummerService} from '../services/post-nummer.service';
import {MatDialog} from '@angular/material';

import {StambladkontaktDialogComponent} from '../stambladkontakt-dialog/stambladkontakt-dialog.component';
import {v} from '@angular/core/src/render3';

export interface Month {
  months: string;
}

@Component({
  selector: 'app-stam-blad',
  templateUrl: './stam-blad.component.html',
  styleUrls: ['./stam-blad.component.css']
})


export class StamBladComponent implements OnInit {

  months: Month[] = [{months: 'Januar'}, {months: 'Febuar'}, {months: 'Marts'}, {months: 'April'}
    , {months: 'Maj'}, {months: 'Juni '}, {months: 'Juli'}, {months: 'August'}, {months: 'September'},
    {months: 'Oktober '}, {months: 'November'}, {months: 'December'}];

  firstLoad = true;
  years: number[] = [];
  dage: Dage[];
  postNr: PostNr[];
  byNavn: PostNr[];
  stamBladForm: FormGroup;
  selectedPostNr;
  selectBynavn;
  maxAntalAviser: number;
  data: StamData[] = [];
  bladId: number;

  constructor(private st: StamdataService, private obs: StamBladObserver, public fb: FormBuilder,
              private ps: PostNummerService, private dialog: MatDialog,) {
    this.obs.emitChange({id: 0});
    this.visStamBlad();
    this.stamBladForm = this.fb.group({

      stamDataArray: this.initStamData()
    });

    this.getAllPostNrData();
    this.visStamBlad();

  }

  ngOnInit() {
    this.visStamBlad();

    this.st.GetAntalStamBlad().subscribe(value => this.maxAntalAviser = value);

    // this.getAllPostNrData();
    this.setYear();

  }

  public Dage() {
    this.st.StamBladDage().subscribe(value => this.dage = value);
  }


  public addStamblad() {

  }


  protected initStamData(): FormGroup {

    return new FormGroup(
      {
        BladID: new FormControl(1, Validators.nullValidator),
        Navn: new FormControl('navn', Validators.required),

        Addresse: new FormControl('addresse', Validators.nullValidator),
        Addresse2: new FormControl('addresse2', Validators.nullValidator),
        Postnr: new FormControl('postnr', Validators.nullValidator),
        By: new FormControl('by', Validators.nullValidator),
        Tlf: new FormControl('tlf', Validators.nullValidator),
        Fax: new FormControl('fax', Validators.nullValidator),
        CVR: new FormControl('cvr', Validators.nullValidator),
        stamdataSide2: new FormGroup({
          hovedGruppe: new FormControl('hovedgruppe', Validators.nullValidator),
          medlemSidenAAr: new FormControl('2333', Validators.nullValidator),
          medlemnSidenMd: new FormControl('32', Validators.nullValidator),
          ejerforhold: new FormControl('ejerforhold', Validators.nullValidator),
          koncern: new FormControl('koncern', Validators.nullValidator)
        })

      });

  }

  public OpretStamBlad() {
    this.stamBladForm.reset();

    console.log('Opret stamblad');

    const stamBlad: StamData = {
      Adresse: this.stamBladForm.get('stamdataArray').get('addresse').value,
      Adresse2: this.stamBladForm.get('stamdataArray').get('addresse2').value,
      PostNr: this.stamBladForm.get('stamdataArray').get('postnr').value,
      Tlf: this.stamBladForm.get('stamdataArray').get('tlf').value,
      CVR: this.stamBladForm.get('stamdataArray').get('cvr').value,
      FIK: this.stamBladForm.get('stamdataArray').get('fik').value,
      Kontaktperson: this.stamBladForm.get('stamdataArray').get('hovedGruppe').value,
      MedlemÅr: this.stamBladForm.get('stamdataArray').get('medlemSidenÅr').value,
      MedlemSiden: this.stamBladForm.get('stamdataArray').get('medlemnSidenMd').value,
      Koncern: this.stamBladForm.get('stamdataArray').get('koncern').value,
      Ejerforhold: this.stamBladForm.get('stamdataArray').get('ejerforhold').value,
      Navn: this.stamBladForm.get('stamdataArray').get('navn').value,
      Navn2: this.stamBladForm.get('stamdataArray').get('navn2').value
    };

    console.log(stamBlad);
    //  this.st.createStamblad(stamBlad).subscribe(value => {});


  }


  public visStamBlad() {
    this.obs.getStamBladEventEmitter().subscribe(s => {

      this.st.getStamBladById(s).subscribe(value => {
        this.data = value;
      });
    });

  }

  public OpdatereStamBlad() {

  }


  public getAllPostNrData() {
    this.st.StamBladAllPostnr().subscribe(data => {
      this.byNavn = data;
      this.postNr = data;
    });
  }

  public setYear() {
    for (let i = 1970; i <= new Date().getFullYear(); i++) {
      this.years.push(i);
    }
  }

  public visOpretKontakDialog() {
    this.dialog.open(StambladkontaktDialogComponent, {
      width: '30%',
      data: {bladid: this.bladId}
    });
  }

}

