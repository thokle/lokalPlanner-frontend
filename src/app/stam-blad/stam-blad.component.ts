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
import {v} from '@angular/core/src/render3';



@Component({
  selector: 'app-stam-blad',
  templateUrl: './stam-blad.component.html',
  styleUrls: ['./stam-blad.component.css']
})


export class StamBladComponent implements OnInit {

  months: Month[] = [{id: 0, name: 'Januar'}, {id: 1, name: 'Febuar'}, {id: 2, name: 'Marts'}, {id: 3, name: 'April'}
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
 stamDatsObserer: Observable<StamBladViewModel[]>;
  selectedMedlemMd;
  selectedmedlemAar;
  selectedGeoCodeId = 0;

  geoService: GeoService;

postnr: number;
  constructor(private st: StamdataService, private obs: StamBladObserver, public fb: FormBuilder,
              private ps: PostNummerService, private dialog: MatDialog, private pss: PostService, private  rs: RegionService,
              private dels: DelomraadeService, private gs: GeoService, private  exservice: ExcelexportService, private snack: MatSnackBar) {
    this.obs.emitChange({id: 0});
    this.stamBladForm = this.fb.group({
      BladId: [ '', Validators.nullValidator],
      Navn:  ['', Validators.nullValidator],
      Navn2:  ['', Validators.nullValidator],
      Adresse:  ['', Validators.nullValidator],
      Adresse2:  ['', Validators.nullValidator],
      PostNr:  ['', Validators.nullValidator],
      Tlf:  ['', Validators.nullValidator],
      Fax:  ['', Validators.nullValidator],
      Cvr:  ['', Validators.nullValidator],
      Kontaktperson:  ['', Validators.nullValidator],
      HovedgruppeId:  ['', Validators.nullValidator],
      Ejerforhold:  ['', Validators.nullValidator],
      Koncern:  ['', Validators.nullValidator],
      Ophoert:  ['', Validators.nullValidator],
      VisPaaWww:  ['', Validators.nullValidator],
      DelOmraadeId:  ['', Validators.nullValidator],
      DiMpDelOmraadeKode:  ['', Validators.nullValidator],
      GeoKodeId:  ['', Validators.nullValidator],
      Totalomraade:  ['', Validators.nullValidator],
      TotalomraadePct:  ['', Validators.nullValidator],
      Primaer:  ['', Validators.nullValidator],
      PrimaerPct:  ['', Validators.nullValidator],
      WwwDaekningSomTekst:  ['', Validators.nullValidator],
      Oplag:  ['', Validators.nullValidator],
      UgedagId:  ['', Validators.nullValidator],
      Format:  ['', Validators.nullValidator],
      OrdredeadlineTekst:  ['', Validators.nullValidator],
      OrdredeadlineRubrik:  ['', Validators.nullValidator],
      MaterialedeadlineTekst:  ['', Validators.nullValidator],
      MaterialedeadlineRubrik:  ['', Validators.nullValidator],
      MedlemMaaned: ['', Validators.nullValidator],
      OrdreEmail:  ['', Validators.nullValidator],
      OrdrecheckEmail:  ['', Validators.nullValidator],
      OrdrecheckSendeDagId:  ['', Validators.nullValidator],
      SendetidOrdrecheck:  ['', Validators.nullValidator],
      SendIndevaerendeUge:  ['', Validators.nullValidator],
      StamdataEmail:  ['', Validators.nullValidator],
      PrisforespoergselEmails:  ['', Validators.nullValidator],
      OrienteringEmails:  ['', Validators.nullValidator],
      Emails:  ['', Validators.nullValidator],
      KontaktpersonerEmails:  ['', Validators.nullValidator],
      BogholderiEmails:  ['', Validators.nullValidator],
      BogholderiKontaktperson:  ['', Validators.nullValidator],
      MedieNetKode:  ['', Validators.nullValidator],
      MatGodtBeloeb:  ['', Validators.nullValidator],
      Hjemmeside:  ['', Validators.nullValidator],
      RedaktionEmail:  ['', Validators.nullValidator],
      AnnonceEmail:  ['', Validators.nullValidator],
      MaterialeEmail:  ['', Validators.nullValidator],
      AnnonceKontrolEmail:  ['', Validators.nullValidator],
      BilagsbladeEmail:  ['', Validators.nullValidator],
      FakturaGruppeId:  ['', Validators.nullValidator],
      SalgsGruppeId:  ['', Validators.nullValidator],
      GruppeRabat:  ['', Validators.nullValidator],
      SamannonceringsRabat:  ['', Validators.nullValidator],
      MaaGiveFarveRabat:  ['', Validators.nullValidator],
      GiverWebTillaeg: ['', Validators.nullValidator],
      OrdreDeadlineTekstDag: ['', Validators.nullValidator],
      OrdreDeadlineTekstKl: ['', Validators.nullValidator],
      MaterialeDeadlineTekstDag: ['', Validators.nullValidator],
      MaterialeDeadlineTekstKl: ['', Validators.nullValidator],
      OrdreDeadlineRubrikDag: ['', Validators.nullValidator],
      OrdreDeadlineRubrikKl: ['', Validators.nullValidator],
      MaterialeDeadlineRubrikDag: ['', Validators.nullValidator],
      MaterialeDeadlineRubrikKl: ['', Validators.nullValidator],
      Overfoert: ['', Validators.nullValidator],
      MedlemAAr: ['', Validators.nullValidator],
      RegionId: ['', Validators.nullValidator],
      Delomraade: ['', Validators.nullValidator],
      OrdrecheckSendeDagID: ['', Validators.nullValidator]

    });
    if (this.bladId === undefined) {

      this.st.getStamBladById({id: 0}).subscribe(value => {

        this.obs.setKontaktBladId(0);
        this.obs.setDaekninkId(0);
        this.stamBladForm.reset();
        this.obs.setDaekninkId(value[0].BladId || 0);


        this.postnr = value[0].PostNr || 1000;

        this.toExcel = value;
        this.setStamBladData(value);
        this.erDerStamblad = true;
        this.setStamBladData(value);
      });

      this.geoService = this.gs;
    }
  }

  ngOnInit() {

   this.getLatestId();
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


   getLatestId() {
     this.st.GetLastestStamBladId().subscribe(value => this.maxAntalAviser = value.item2);

   }
  public StartOpretNytStamBlad() {
    this.opretOdatere = 'Opret nyt Stamblad';
    this.stamBladForm.reset();
    this.st.GetLastestStamBladId().subscribe(value1 => {
      this.bladId = value1.item2 + 1;
      this.stamBladForm.patchValue({BladId: this.bladId});
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

        this.obs.setDaekninkId(value[0].BladId);
        this.obs.setKontaktBladId(value[0].BladId);

        this.bladId = value[0].BladId;
        this.toExcel = value;
        this.obs.setPostNr(value[0].PostNr);
        this.setStamBladData(value);


        this.bladId = value[0].BladId;
      }, error1 => {

      }, () => {

      });
    });
  }

  private setStamBladData(value) {
    this.erDerStamblad = true;
    this.stamBladForm.patchValue({'BladId': value[0].BladId || 0});
    this.stamBladForm.patchValue({'Navn': value[0].Navn || ''});
    this.stamBladForm.patchValue({'Adresse': value[0].Adresse || ''});
    this.stamBladForm.patchValue({'Adresse2': value[0].Adresse2 || ''});
    this.stamBladForm.patchValue({'PostNr': value[0].PostNr || 0});
    this.stamBladForm.patchValue({'Tlf': value[0].Tlf || 0});
    this.stamBladForm.patchValue({'Fax': value[0].Fax || 0});
    this.stamBladForm.patchValue({'Cvr': value[0].Cvr || 0});
    this.stamBladForm.patchValue({'HovedgruppeId': value[0].HovedgruppeId || 0});
    this.stamBladForm.patchValue({'MedlemMaaned': value[0].MedlemMaaned ||  0});
    this.stamBladForm.patchValue({'MedlemAAr': value[0].MedlemAAr || 0});
    this.stamBladForm.patchValue({'Ejerforhold': value[0].Ejerforhold || ''});
    this.stamBladForm.patchValue({'Ophoert': value[0].Ophoert || false});
    this.stamBladForm.patchValue({'VisPaaWww': value[0].VisPaaWww || false});
    this.stamBladForm.patchValue({'Overfoert': value[0].Overfoert || false});
    this.stamBladForm.patchValue({'Totalomraade': value[0].Totalomraade || ''});
    this.stamBladForm.patchValue({'TotalomraadePct': value[0].TotalomraadePct || 0});
    this.stamBladForm.patchValue({'PrimaerPct': value[0].PrimaerPct || 0});
    this.stamBladForm.patchValue({'Oplag': value[0].Oplag || 0});
    this.stamBladForm.patchValue({'Format': value[0].Format || 0});
    this.stamBladForm.patchValue({'OrdredeadlineTekst': value[0].OrdredeadlineTekst || ''});
    this.stamBladForm.patchValue({'OrdredeadlineRubrik': value[0].OrdredeadlineRubrik || false});
    this.stamBladForm.patchValue({'MaterialedeadlineTekst': value[0].MaterialedeadlineTekst || ''});
    this.stamBladForm.patchValue({'MaterialedeadlineRubrik': value[0].MaterialedeadlineRubrik || ''});
    this.stamBladForm.patchValue({'RedaktionEmail': value[0].RedaktionEmail});
    this.stamBladForm.patchValue({'OrdreEmail': value[0].OrdreEmail});
    this.stamBladForm.patchValue({'MaterialeEmail': value[0].MaterialeEmail});
    this.stamBladForm.patchValue({'OrdrecheckEmail': value[0].OrdrecheckEmail});
    this.stamBladForm.patchValue({'MaterialeDeadlineRubrikDag': value[0].MaterialeDeadlineRubrikDag});
    this.stamBladForm.patchValue({'OrdrecheckSendeDagId': value[0].OrdrecheckSendeDagId});
    this.stamBladForm.patchValue({'SendIndevaerendeUge': value[0].SendIndevaerendeUge});
    this.stamBladForm.patchValue({'AnnonceKontrolEmail': value[0].AnnonceKontrolEmail || ''});
    this.stamBladForm.patchValue({'BilagsbladeEmail': value[0].BilagsbladeEmail});
    this.stamBladForm.patchValue({'MedieNetKode': value[0].MedieNetKode});
    this.stamBladForm.patchValue({'StamdataEmail': value[0].StamdataEmail});
    this.stamBladForm.patchValue({'PrisforespoergselEmails': value[0].PrisforespoergselEmails});
    this.stamBladForm.patchValue({'OrienteringEmails': value[0].OrienteringEmails});
    this.stamBladForm.patchValue({'Emails': value[0].Emails});
    this.stamBladForm.patchValue({'KontaktpersonerEmails': value[0].KontaktpersonerEmails});
    this.stamBladForm.patchValue({'BogholderiEmails': value[0].BogholderiEmails});
    this.stamBladForm.patchValue({'RegionId': value[0].RegionId || 0 });
    this.stamBladForm.patchValue({'Delomraade': value[0].Delomraade});

  }

  public OpdatereStamBlad() {

    let nyStamdat: StamData;
    console.log(this.selectedDelOmraade);
    const stamdataControles = this.stamBladForm.controls;
    let bladId = 0;
    if (stamdataControles.BladId.value !== null) {
      bladId = this.bladId;
    } else {
      bladId = this.nytBladId;
    }

    console.log(this.stamBladForm);

    nyStamdat = {
      BladID: this.bladId,
      MedlemÅr: stamdataControles.MedlemAAr.value,
      Ophort: stamdataControles.Ophoert.value,

      MedlemMaaned: stamdataControles.mdlmaaned.value,
      MaterialedeadlineTekst: stamdataControles.MaterialedeadlineTekst.value,
      MaterialedeadlineRubrik: stamdataControles.MaterialedeadlineRubrik.value,
      KontaktpersonerEmails: stamdataControles.KontaktpersonerEmails.value,
      OrdredeadlineTekst: stamdataControles.OrdredeadlineTekst.value,
      OrdredeadlineRubrik: stamdataControles.OrdredeadlineRubrik.value,
      UgedagID: stamdataControles.Ugedage.value,
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
      RegionId: stamdataControles.RegionId.value,
      AnnonceKontrolEmail: stamdataControles.AnnonceKontrolEmail.value,
      BilagsbladeEmail: stamdataControles.BilagsbladeEmail.value,
      BogholderiEmails: stamdataControles.BogholderiEmails.value,
      AnnonceEmail: stamdataControles.AnnonceEmail.value,
      DelOmraadeID: stamdataControles.Delomraade.value,
      DiMPDelOmraadeKode: stamdataControles.Delomraade.value,
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
      OrdrecheckSendeDagID:  stamdataControles.OrdrecheckSendeDagID.value,
      OrdreDeadlineRubrikDag: stamdataControles.OrdreDeadlineRubrikDag.value,
      OrdreDeadlineRubrikKl: stamdataControles.OrdreDeadlineRubrikKl.value,
      Navn2: stamdataControles.Navn2.value,
      OrdreDeadlineTekstDag: stamdataControles.OrdrecheckSendeDagID.value,
      OrdreDeadlineTekstKl: stamdataControles.OrdreDeadlineTekstKl.value,
      SendetidOrdrecheck: stamdataControles.SendetidOrdrecheck.value,
      SendIndeværendeUge: stamdataControles.SendIndevaerendeUge.value,

    };

    this.st.createStamblad(nyStamdat).subscribe(value => {
      this.snack.open('Stamblad ', value[0], { duration: 2000});
      this.opretOdatere = 'Opdatere';

    }, error1 => {console.log(error1);
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
    this.obs.setPostNr(this.selectedPost);
  }


  public setZipByByNavn() {
    this.pss.getZipCodeByNavn(this.selectedByNavn).subscribe(value => {
      console.log(value);
      this.selectedZipCode = value[0].PostNr;
      console.log(this.selectedZipCode);
    });
  }

  public visOpretKontakDialog() {
    this.dialog.open(StambladkontaktDialogComponent, { data: {bladid: this.bladId} ,
      width: '30%', height: '70%' }).afterClosed().subscribe(value => {
      console.log(value);
      this.snack.open('Kontakt er blevet oprettet', ' ', {duration: 3000});
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

  public stamBladOphoert() {

  }

}

