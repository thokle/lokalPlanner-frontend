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
import {MatSnackBar} from '@angular/material/typings/snack-bar';
import {Observable, Subscribable} from 'rxjs';
import {PostService} from '../services/post.service';



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
  selectedZipCode;
  selectedByNavn;
  years: number[] = [];
  dage: Dage[];
  postNr: PostNr[];
  byNavn: PostNr[];
  stamBladForm: FormGroup;
  selectedPostNr;
  selectBynavn;
  bladId: number;
  maxAntalAviser: number;
  data$: StamData[] | null;
  erDerStamblad = false;
  nytBladId: number;
  opretOdatere: string;
  constructor(private st: StamdataService, private obs: StamBladObserver, public fb: FormBuilder,
              private ps: PostNummerService, private dialog: MatDialog, private pss: PostService) {
    this.obs.emitChange({id: 0});

    this.stamBladForm = this.fb.group({
      BladID: new FormControl(1, Validators.nullValidator),
      Navn: new FormControl('navn', Validators.required),

      Addresse: new FormControl('addresse', Validators.nullValidator),
      Addresse2: new FormControl('addresse2', Validators.nullValidator),
      Postnr: new FormControl('postnr', Validators.nullValidator),
      By: new FormControl('by', Validators.nullValidator),
      Tlf: new FormControl('tlf', Validators.nullValidator),
      Fax: new FormControl('fax', Validators.nullValidator),
      CVR: new FormControl('cvr', Validators.nullValidator),
      hovedGruppe: new FormControl('hovedgruppe', Validators.nullValidator),
      medlemSidenAAr: new FormControl('2333', Validators.nullValidator),
      medlemnSidenMd: new FormControl('32', Validators.nullValidator),
      ejerforhold: new FormControl('ejerforhold', Validators.nullValidator),
      koncern: new FormControl('koncern', Validators.nullValidator)

     });


    if (this.bladId === undefined  ) {
      this.st.getStamBladById({id: 0}).subscribe(value => {
        this.data$ = value;
        this.erDerStamblad = true;
      });
    }
    this.getAllPostNrData();
    this.visStamBlad();

  }

  ngOnInit() {
    this.st.GetAntalStamBlad().subscribe(value => this.maxAntalAviser = value);
    this.opretOdatere = 'Opdater';
    // this.getAllPostNrData();
    this.setYear();

  }

  public Dage() {
    this.st.StamBladDage().subscribe(value => this.dage = value);
  }

  public StartOpretNytStamBlad() {
    this.stamBladForm.reset();
    let bladid = 0;
    this.opretOdatere = 'Opret';
    this.st.GetLastestStamBladId().subscribe(value => {
   bladid = value.item2;
   this.nytBladId = bladid;
      this.stamBladForm.patchValue({stamDataArray: {
        BladID: bladid + 1
        }});
    });

    console.log('Opret stamblad' + bladid );
}
  public OpretStamBlad() {

    const value = this.stamBladForm.controls;
  console.log(value);
  }


  public visByNavnByPostNr() {

  }

  public visStamBlad() {
    this.obs.getStamBladEventEmitter().subscribe(s => {
    this.st.getStamBladById(s).subscribe(value => {
      this.data$ = value;
      this.erDerStamblad = true;
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

  public setByNavnByZipCode() {
    this.pss.getByNavnByPostnr(this.selectedZipCode).subscribe(data => {
      console.log(data);
      this.stamBladForm.patchValue({stamDataArray: {

        }});
    });
  }


  public setZipByByNavn() {
    this.pss.getZipCodeByNavn(this.stamBladForm.value.By).subscribe(value => {
      console.log(value);
      this.stamBladForm.patchValue({stamDataArray: {

        }});
    });
  }
  public visOpretKontakDialog() {
    this.dialog.open(StambladkontaktDialogComponent, {
      width: '30%',
      data: {bladid: this.bladId}
    });
  }

}

