import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Prisers} from '../models/Prisers';
import {Observable, ReplaySubject, ObservedValuesFromArray} from 'rxjs';

import {PostNr} from '../models/PostNr';
import {PrisersTable, StamBladObserver} from '../stam-blad-observer';
import {PriceService} from '../services/price.service';
import {SetPrisListTable} from '../models/set-pris-list-table';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-pricetable',
  templateUrl: './pricetable.component.html',
  styleUrls: ['./pricetable.component.css']
})
export class PricetableComponent implements OnInit {
  i = 1;
  listtoSave: number[] = [1];
  map = new Map();
  d: Date = new Date();
  public prisList: Prisers[];

  placeringId;
  prislisteId;
yaer;
  bladid;


  constructor(private obs: StamBladObserver, private ps: PriceService, private snack:  MatSnackBar) {
    console.log('Full year ' + this.d.getFullYear());

  }


  ngOnInit() {
    this.setTable();
  }

  addtoMap(event: any, id: string) {

    if (event.type === 'focusout') {
      const html: string = (<HTMLInputElement>document.getElementById(id)).value;
      this.map.set(id, html);
    } else if (event.key === 'Enter') {
      this.map.forEach((value, key) => {
        console.log('Key ' + value + ' Value ' + key);

      });
    }
    this.map.forEach(value => {
      console.log('addTOMap', value);
    });
  }

  /**
   *  /**
   * bladid: number;
   placeringi: number;
   aar: number;
   prislisteid: number;
   */
  setTable() {
    this.obs.getToTableEmitter().subscribe( v => {
      this.prisList = [];
      this.bladid = v.bladid;
      this.placeringId = v.placeringi;
      this.prislisteId = v.prislisteid;
      this.yaer = v.aar;
      this.ps.GetPriserByPosition(this.bladid, v.placeringi, v.aar, v.prislisteid).subscribe(va => {
        this.prisList = va;
      });
    });

  }

  public addPris() {
    const p: Prisers = { PrislisteID1: this.prislisteId, PlaceringID1: this.placeringId, FormatFra1: this.map.get('fra'),
      FormatTil1: this.map.get('til'), BladID1: this.bladid, AAr1: this.yaer, mmPris: this.map.get('mmPris'),
      FarvePris1: this.map.get('1farve'),
    Farve4Pris1: this.map.get('4farve'), Farve4Max1: this.map.get('4max'), Farve4Min1: this.map.get('4min'),
      FarveMax1: this.map.get('1max'), FarveMin1: this.map.get('1min'), ControlNavn1: 1};
    this.ps.createPriserTable(p).subscribe(value => {
      this.snack.open('Priser er oprettet ', '', {duration: 4000});
    });
  }

  addRow(i: number) {

    this.listtoSave.push(i++);
  this.addPris();
  }
}
