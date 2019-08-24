import { Component, OnInit } from '@angular/core';
import {AnnonceService} from '../services/annonce.service';
import {BureauService} from '../services/bureau.service';
import {Bureau} from '../models/bureau';
import {Annonoer} from '../models/annonoer';
import {StamBladObserver} from '../stam-blad-observer';
import {FormArray, FormBuilder, FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {MediePlanService} from '../services/medie-plan.service';
import {Observable} from 'rxjs';
import {AktiveAviser} from '../models/aktive-aviser';
import {MedieplanComponent} from '../medieplan/medieplan.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-medieplan-toolbar',
  templateUrl: './find-medieplan-toolbar.component.html',
  styleUrls: ['./find-medieplan-toolbar.component.scss']
})
export class FindMedieplanToolbarComponent implements OnInit {



  burreauer: Bureau[] = [];
  annoncer: Annonoer[] =  [];
  list: Observable<any[]> ;
  formArray:  FormGroup;
  constructor(private ans: AnnonceService, private bus: BureauService, private obs: StamBladObserver,
              private ms: MediePlanService  , private  fb: FormBuilder, private router: Router) {
    this.formArray = this.fb.group({
      medieplannr: [],
      konsulent: [],
      annoncoer: [],
      bureau: [],
      fraAar : [],
      tilAar : [],
      aar : [],
      visInAktive : [],
      checkBoxMediePlan : [],
      checkBoxBooking: [],
      checkBoxrtAK: [],
      ckechboxFaktureing: []

    });
  }

  ngOnInit() {
    this.setAnnoncer();
    this.setBureauer();
  }

  private  setAnnoncer() {
    this.ans.getAnnoncoer().subscribe(value =>  this.annoncer = value);
  }

  private  setBureauer() {
    this.bus.getBureas().subscribe(value =>  this.burreauer = value);
  }

  public search() {
    console.log('Start search');
    const mp  = this.formArray.get('medieplannr').value === undefined ? 'null' : this.formArray.get('medieplannr').value;
    const ks = this.formArray.controls.konsulent.value === null ? 'null' : this.formArray.get('konsulent').value;
    const anc = this.formArray.get('annoncoer').value  === undefined ? 'null' : this.formArray.get('annoncoer').value;
    const a = this.formArray.controls.aar.value === null ? 0 :  this.formArray.controls.aar.value;
    const bu = this.formArray.get('bureau').value === undefined ? 'null' : this.formArray.get('bureau').value;
    const fraA  = this.formArray.controls.fraAar.value === null ? 0 : this.formArray.controls.fraAar.value;
    const tilA = this.formArray.controls.aar.value === null ? 0 : this.formArray.controls.aar.value;
    const visA = this.formArray.get('visInAktive').value;
    const cbM = this.formArray.get('checkBoxMediePlan').value;

    const cbBook = this.formArray.get('checkBoxBooking').value;
    const cbAk = this.formArray.get('checkBoxrtAK').value;
    const chF = this.formArray.get('ckechboxFaktureing').value;

   this.list =  this.ms.findMediePlanToolbar(mp , anc , bu , fraA , tilA , a , visA , cbM  , cbAk , chF);

  }

  public transferdata(event) {
    const targetCell = event.cell;

    const row =  targetCell.rowData;
this.router.navigate(['dashboard/fundet_mediePlan', row.MedieplanNr]);


      console.log('row.data ' + row);

    }



  }
