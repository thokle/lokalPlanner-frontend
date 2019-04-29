import {Component, OnInit} from '@angular/core';
import {StamdataService} from '../services/stamdata.service';

import {Dage} from '../models/Dage';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StamBladObserver} from '../stam-blad-observer';
import {StamData} from '../models/Stamdata';
import {PostNr} from '../models/PostNr';
import {PostNummerService} from '../services/post-nummer.service';
import {MatDialog, MatSnackBar} from '@angular/material';

import {StambladkontaktDialogComponent} from '../stambladkontakt-dialog/stambladkontakt-dialog.component';

import {Observable, Subscribable} from 'rxjs';
import {PostService} from '../services/post.service';
import {StamBladViewModel} from '../models/StamBladViewModel';
import {Region} from '../models/Region';
import {GeoKode} from '../models/GeoKode';
import {RegionService} from '../services/region.service';
import {DelomraadeService} from '../services/delomraade.service';
import {DelOmraade} from '../models/DelOmraade';
import {GeoService} from '../services/geo.service';
import {Month} from '../models/Month';
import {ExcelexportService} from '../services/excelexport.service';


@Component({
  selector: 'app-stam-blad',
  templateUrl: './stam-blad.component.html',
  styleUrls: ['./stam-blad.component.css']
})


export class StamBladComponent implements OnInit {

  months: Month[] = [{id: 0, name: 'Januar'}, {id: 1, name: 'Fabuar'}, {id: 2, name: 'Marts'}, {id: 3, name: 'April'}
    , {id: 4, name: 'Maj'}, {id: 5, name: 'Jumi'}, {id: 6, name: 'Juli'}, {id: 7, name: 'August'}, {id: 8, name: 'September'}, {
      id: 9,
      name: 'Oktober'
    }, {id: 10, name: 'November'}
    , {id: 11, name: 'December'}];

  firstLoad = true;
  selectedZipCode;
  selectedByNavn;
  years: number[] = [];
  dage: Dage[];
  postNr: PostNr[];
  byNavn: PostNr[];
  stamBladForm: FormGroup;
  bladId: number;
  maxAntalAviser: number;
  data$: StamBladViewModel;
  erDerStamblad = false;
  nytBladId: number;
  toExcel: StamBladViewModel[];
  opretOdatere: string;

  geocodes: GeoKode[];
  regions: Region[];
  delomraader: DelOmraade[];

  selectedDelOmraade: DelOmraade;

  selectedPost;

  selectedMedlemMd;
  selectedmedlemAar;
  selectedGeoCodeId = 0;

  geoService: GeoService;
  RegionId = new FormControl('', Validators.nullValidator);
  Delomraade = new FormControl('', Validators.nullValidator);
  Ugedage = new FormControl('', Validators.nullValidator);
  MedlemMaaned = new FormControl('', Validators.nullValidator);
  OrdrecheckSendeDagID = new FormControl('', Validators.nullValidator);
  MedlemAAr = new FormControl('', Validators.nullValidator);

  constructor(private st: StamdataService, private obs: StamBladObserver, public fb: FormBuilder,
              private ps: PostNummerService, private dialog: MatDialog, private pss: PostService, private  rs: RegionService,
              private dels: DelomraadeService, private gs: GeoService, private  exservice: ExcelexportService, private snack: MatSnackBar) {
    this.obs.emitChange({id: 0});


    if (this.bladId === undefined) {
      this.st.getStamBladById({id: 0}).subscribe(value => {
        this.obs.setKontaktBladId(0);
        this.data$ = value[0];
        this.bladId = this.data$.BladId;
        this.obs.setDaekninkId(value[0].BladId);
        this.erDerStamblad = true;
    this.toExcel = value;
      }, error1 => {

      }, () => {
        this.pss.getByNavnByPostnr(this.data$.PostNr).subscribe(value => {
          this.selectedByNavn = value[0].PostBy;
        });
      });
    }
  }

  ngOnInit() {
    this.geoService = this.gs;
    this.stamBladForm = this.fb.group({
      BladId: [],
      Navn: [],
      Navn2: [],
      Adresse: [],
      Adresse2: [],
      PostNr: [],
      Tlf: [],
      Fax: [],
      Cvr: [],

      Kontaktperson: [],
      HovedgruppeId: [],

      Ejerforhold: [],
      Koncern: [],
      Ophoert: [],
      VisPaaWww: [],

      DelOmraadeId: [],
      DiMpDelOmraadeKode: [],
      GeoKodeId: [],
      Totalomraade: [],
      TotalomraadePct: [],
      Primaer: [],
      PrimaerPct: [],
      WwwDaekningSomTekst: [],
      Oplag: [],
      UgedagId: [],
      Format: [],
      OrdredeadlineTekst: [],
      OrdredeadlineRubrik: [],
      MaterialedeadlineTekst: [],
      MaterialedeadlineRubrik: [],
      OrdreEmail: [],
      OrdrecheckEmail: [],
      OrdrecheckSendeDagId: [],
      SendetidOrdrecheck: [],
      SendIndevaerendeUge: [],
      StamdataEmail: [],
      PrisforespoergselEmails: [],
      OrienteringEmails: [],
      Emails: [],
      KontaktpersonerEmails: [],
      BogholderiEmails: [],
      BogholderiKontaktperson: [],
      MedieNetKode: [],
      MatGodtBeloeb: [],
      Hjemmeside: [],
      RedaktionEmail: [],
      AnnonceEmail: [],
      MaterialeEmail: [],
      AnnonceKontrolEmail: [],
      BilagsbladeEmail: [],
      FakturaGruppeId: [],
      SalgsGruppeId: [],
      GruppeRabat: [],
      SamannonceringsRabat: [],
      MaaGiveFarveRabat: [],
      GiverWebTillaeg: [],
      OrdreDeadlineTekstDag: [],
      OrdreDeadlineTekstKl: [],
      MaterialeDeadlineTekstDag: [],
      MaterialeDeadlineTekstKl: [],
      OrdreDeadlineRubrikDag: [],
      OrdreDeadlineRubrikKl: [],
      MaterialeDeadlineRubrikDag: [],
      MaterialeDeadlineRubrikKl: [],
      Overfoert: [],
      Timestamp: [],
      SelectedPostNr: []

    });

    this.st.GetAntalStamBlad().subscribe(value => this.maxAntalAviser = value);
    this.opretOdatere = 'Opdater';
    // this.getAllPostNrData();
    this.setYear();
    this.getAllPostNrData();
    this.visStamBlad();
    this.setRegions();
    this.setDelOmraade();
    this.setDage();
    this.setGeoCodes();

  }


  public StartOpretNytStamBlad() {
    this.opretOdatere = 'Opret nyt Stamblad';
    this.stamBladForm.reset();
    this.st.GetLastestStamBladId().subscribe(value1 => {
      this.nytBladId = value1.item2 + 1;
      this.stamBladForm.patchValue({BladId: this.nytBladId});
    });
    const value = this.stamBladForm.controls;
    console.log(this.selectedDelOmraade);
    const stamdataControles = this.stamBladForm.controls;

    let bladId = 0;
    if (stamdataControles.BladId.value !== undefined) {
      bladId = stamdataControles.BladId.value;
    } else {
      bladId = this.nytBladId;
    }
    console.log(this.nytBladId);

    console.log(value);
  }


  public visStamBlad() {

    this.obs.getStamBladEventEmitter().subscribe(s => {
      this.st.getStamBladById(s).subscribe(value => {
        this.data$ = value[0];
        this.obs.setDaekninkId(value[0].BladId);
        this.obs.setKontaktBladId(value[0].BladId);

        this.bladId = value[0].BladId;
        this.toExcel = value;
      }, error1 => {

      }, () => {
        this.pss.getByNavnByPostnr(this.data$.PostNr).subscribe(value => {
          this.selectedByNavn = value[0].PostBy;
          this.erDerStamblad = true;
        });
      });
    });
  }

  public OpdatereStamBlad() {

    let nyStamdat: StamData;
    console.log(this.selectedDelOmraade);
    const stamdataControles = this.stamBladForm.controls;
    let bladId = 0;
    if (stamdataControles.BladId.value !== undefined) {
      bladId = stamdataControles.BladId.value;
    } else {
      bladId = this.nytBladId;
    }

    console.log(this.stamBladForm);
    nyStamdat = {
      BladID: bladId,
      MedlemÅr: (<number>this.MedlemAAr.value),
      Ophort: stamdataControles.Ophoert.value,

      MedlemMaaned: (<Month>this.selectedMedlemMd).id,
      MaterialedeadlineTekst: stamdataControles.MaterialedeadlineTekst.value,
      MaterialedeadlineRubrik: stamdataControles.MaterialedeadlineRubrik.value,
      KontaktpersonerEmails: stamdataControles.KontaktpersonerEmails.value,
      OrdredeadlineTekst: stamdataControles.OrdredeadlineTekst.value,
      OrdredeadlineRubrik: stamdataControles.OrdredeadlineRubrik.value,
      UgedagID: (<Dage>this.Ugedage.value).DagID,
      Format: stamdataControles.Format.value,
      Ejerforhold: stamdataControles.Ejerforhold.value,
      Oplag: stamdataControles.Oplag.value,
      Tlf: stamdataControles.Tlf.value,
      HovedgruppeID: stamdataControles.HovedgruppeId.value,
      GeoKodeID: this.selectedGeoCodeId,
      MaterialeDeadlineRubrikDag: stamdataControles.MaterialeDeadlineRubrikDag.value,
      PostNr: this.selectedPost,
      Koncern: stamdataControles.Koncern.value,
      CVR: stamdataControles.Cvr.value,
      Fax: stamdataControles.Fax.value,
      Adresse2: stamdataControles.Adresse2.value,
      Adresse: stamdataControles.Adresse.value,
      Navn: stamdataControles.Navn.value,
      RegionId: (<Region>this.RegionId.value).RegionID,
      AnnonceKontrolEmail: stamdataControles.AnnonceKontrolEmail.value,
      BilagsbladeEmail: stamdataControles.BilagsbladeEmail.value,
      BogholderiEmails: stamdataControles.BogholderiEmails.value,
      AnnonceEmail: stamdataControles.AnnonceEmail.value,
      DelOmraadeID: (<DelOmraade>this.Delomraade.value).DelOmraadeId,
      DiMPDelOmraadeKode: (<DelOmraade>this.Delomraade.value).DelOmraadeKode1,
      RedaktionEmail: stamdataControles.RedaktionEmail.value,
      OrdreEmail: stamdataControles.OrdreEmail.value,
      Emails: stamdataControles.Emails.value,
      BogholderiKontaktperson: stamdataControles.BogholderiKontaktperson.value,
      MaaGiveFarveRabat: stamdataControles.MaaGiveFarveRabat.value,
      FakturaGruppeID: 0,

      GruppeRabat: stamdataControles.GruppeRabat.value,
      Hjemmeside: stamdataControles.Hjemmeside.value,
      MaterialeDeadlineRubrikKl: stamdataControles.MaterialeDeadlineRubrikKl.value,
      MaterialeDeadlineTekstDag: stamdataControles.MaterialeDeadlineTekstDag.value,
      MaterialeDeadlineTekstKl: stamdataControles.MaterialeDeadlineTekstKl.value,
      MaterialeEmail: stamdataControles.MaterialeEmail.value,
      MatGodtBeløb: stamdataControles.MatGodtBeloeb.value,
      MedieNetKode: stamdataControles.MedieNetKode.value,
      OrdrecheckEmail: stamdataControles.OrdrecheckEmail.value,
      OrdrecheckSendeDagID: (<Dage>this.OrdrecheckSendeDagID.value).DagID,
      OrdreDeadlineRubrikDag: stamdataControles.OrdreDeadlineRubrikDag.value,
      OrdreDeadlineRubrikKl: stamdataControles.OrdreDeadlineRubrikKl.value,
      Navn2: stamdataControles.Navn2.value,
      OrdreDeadlineTekstDag: (<Dage>this.OrdrecheckSendeDagID.value).DagID,
      OrdreDeadlineTekstKl: stamdataControles.OrdreDeadlineTekstKl.value,
      SendetidOrdrecheck: stamdataControles.SendetidOrdrecheck.value,
      SendIndeværendeUge: stamdataControles.SendIndevaerendeUge.value,

    };

    this.st.createStamblad(nyStamdat).subscribe(value => {
      this.snack.open('Stanblad ', '', { duration: 2000});
    }, error1 => {

    }, () => {

    });
  }


  public getAllPostNrData() {
    this.st.StamBladAllPostnr().subscribe(data => {
      this.byNavn = data;
      this.postNr = data;
    });
  }

  public setYear() {
    for (let i = 1970; i <= new Date().getFullYear(); i++) {

      this.years.push(i - 1900);
    }
  }

  public setByNavnByZipCode() {
    this.pss.getByNavnByPostnr(this.selectedPost).subscribe(data => {
      this.stamBladForm.patchValue({PostByNavn: data[0].PostNr});
    });
  }


  public setZipByByNavn() {
    this.pss.getZipCodeByNavn(this.selectedByNavn).subscribe(value => {
      console.log(value);
      this.selectedZipCode = value[0].PostNr;
      console.log(this.selectedZipCode);
    });
  }

  public visOpretKontakDialog() {
    this.dialog.open(StambladkontaktDialogComponent, { data: {bladid: this.data$.BladId} , width: '70%', height: '60%' }).afterClosed().subscribe(value => {
      console.log(value);
    });
  }

  public setRegions() {
    this.st.StamBladRegions().subscribe(value => {
      this.regions = value;
    });
  }

  public setGeoCodes() {
    this.st.StamBladGeoCodes().subscribe(value => {
      this.geocodes = value;
    });
  }


  public setDelOmraade() {
    this.dels.GetDelomraader().subscribe(value => {
      this.delomraader = value;
    });
  }

  public setDage() {
    this.st.StamBladDage().subscribe(value => {
      this.dage = value;
    });
  }

  public  exportToExcel() {
    this.exservice.exportAsExcelFile(this.toExcel, 'test');
  }


}

