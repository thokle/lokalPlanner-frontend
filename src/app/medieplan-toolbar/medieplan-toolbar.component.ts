import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {PlaceringServiceService} from '../services/placering-service.service';
import {PlaceringModel} from '../models/placering-model';
import {BureauService} from '../services/bureau.service';
import {AnnonceService} from '../services/annonce.service';
import {Bureau} from '../models/bureau';
import {Annonoer} from '../models/annonoer';

@Component({
  selector: 'app-medieplan-toolbar',
  templateUrl: './medieplan-toolbar.component.html',
  styleUrls: ['./medieplan-toolbar.component.css']
})
export class MedieplanToolbarComponent implements OnInit {

  placeringer: PlaceringModel[] = []
  years: number[]  = [];
  weeks: number[] = [];

  bureau: Bureau[] = [];
  annonceer: Annonoer[] = [];
  form: FormGroup;
  constructor(private fb: FormBuilder, private pls: PlaceringServiceService, private  bs: BureauService, private as : AnnonceService) {
    this.form = this.fb.group({
      annoncor: [],
      bureau: [],
      format1: [],
      format2: [],
farve: [],
placering: [],
      uge: [],
      aar: [],
      bemaerkning: [],
      kommentar: []
    });
  this.setPlaceringer();
  this.setYears();
  this.setWeeks();
  this.setAnnoncer();
  this.setBureau();
  }

  ngOnInit() {
  }

  private setPlaceringer() {
      this.pls.getPlaceringer().subscribe(value => {
        this.placeringer = value;
      });
  }

  private  setYears() {
    for ( let i = new Date().getFullYear(); i<=new Date().getFullYear() + 20; i++ )  {
      this.years.push(i);
    }
  }

  private setWeeks() {
    for (let i = 1; i <= 53; i++) {
      this.weeks.push(i);
    }
  }

  private setAnnoncer() {
    this.as.getAnnoncoer().subscribe(value => {
      this.annonceer = value;
    });
}

  private setBureau() {
   this.bs.getBureas().subscribe(value => {
     this.bureau = value;
   });
}

  public filterAnnonør() {

  }
  public filterBurea() {

  }
}
