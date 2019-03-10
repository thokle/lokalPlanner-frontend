import { Component, OnInit } from '@angular/core';
import {StamdataService} from '../services/stamdata.service';
import {Observable} from 'rxjs';
import {Dage} from '../models/Dage';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StamBladObserver} from '../stam-blad-observer';
import {StamData} from '../models/Stamdata';
import {PostNr} from '../models/PostNr';
import {PostNummerService} from '../services/post-nummer.service';

@Component({
  selector: 'app-stam-blad',
  templateUrl: './stam-blad.component.html',
  styleUrls: ['./stam-blad.component.css']
})
export class StamBladComponent implements OnInit {

  dage: Dage[];
  postNr: PostNr[];
  byNavn: PostNr[];
  stamBladForm: FormGroup;
  selectedPostNr;
  selectBynavn;
  constructor(private st: StamdataService, private obs: StamBladObserver, public fb: FormBuilder, private ps: PostNummerService) {
this.stamBladForm = this.fb.group({
  stamDataArray: this.initStamData()
});

    this.obs.getEventsEmitter().subscribe(on => console.log(on));
  }

  ngOnInit() {
   // this.st.getStamBladById(2).subscribe(value => console.log(value));
    this.visStamBlad();
   // this.getAllPostNrData();
  }

  public Dage() {
    this.st.StamBladDage().subscribe( value => this.dage = value);
  }


  public addStamblad() {

  }


  protected initStamData(): FormGroup {

   return  new FormGroup(
    {
      bladId: new FormControl('', Validators.nullValidator),
      navn: new FormControl('', Validators.required),
      navn2: new FormControl('', Validators.nullValidator),
      addresse: new FormControl('', Validators.nullValidator),
      addresse2: new FormControl('', Validators.nullValidator),
      postnr: new FormControl('', Validators.nullValidator),
      by: new FormControl('', Validators.nullValidator),
      tlf: new FormControl('', Validators.nullValidator),
      fax: new FormControl('', Validators.nullValidator),
      cvr: new FormControl('', Validators.nullValidator),
      fik: new FormControl('', Validators.nullValidator),
      kontaktPerson: new FormControl('', Validators.nullValidator),
      stamdataSide2: new FormGroup({
        hovedGruppe: new FormControl('', Validators.nullValidator),
        medlemSidenAAr: new FormControl('', Validators.nullValidator),
        medlemnSidenMd: new FormControl('', Validators.nullValidator),
        ejerforhold: new FormControl('', Validators.nullValidator),
        koncern: new FormControl('', Validators.nullValidator)
      })

    });

  }

  public OpretStamBlad() {


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

  //  this.st.createStamblad(stamBlad).subscribe(value => {});


  }


    public  visStamBlad() {
      this.obs.getStamBladEventEmitter().subscribe(s => {
        console.log(s.id);
      });
    }

  public OpdatereStamBlad() {

  }


  public  getAllPostNrData() {
    this.ps.getAllPostNummer().subscribe(data => {
      this.byNavn = data;
      this.postNr = data;
    });
  }

}

