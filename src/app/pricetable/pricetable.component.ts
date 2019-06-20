import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Prisers} from '../models/Prisers';
import {Observable, ReplaySubject, ObservedValuesFromArray} from 'rxjs';

import {PostNr} from '../models/PostNr';
import {PrisersTable, StamBladObserver} from '../stam-blad-observer';
import {PriceService} from '../services/price.service';
import {SetPrisListTable} from '../models/set-pris-list-table';


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


  bladid;


  constructor(private obs: StamBladObserver, private ps: PriceService) {
    console.log('Full year ' + this.d.getFullYear());
    this.setTable();
  }


  ngOnInit() {

  }

  addtoMap(event: any, id: string) {

    if (event.key === 'Tab') {
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

  setTable() {

    /**
     * bladid;
     placeringid;
     aar;
     prislisteid;
     */
    this.obs.getToTableEmitter().subscribe( v => {
      this.bladid = v.bladid;
      this.placeringId = v.placeringid;
      this.ps.GetPriserByPosition(v.bladid, v.placeringid, v.aar, v.placeringid).subscribe(va => {
        this.prisList = va;
      });
    });

  }

  public addPris(item: Map<string, number>) {
  }

  addRow(i: number) {

    this.listtoSave.push(i++);
    this.listtoSave.pop();
  }
}
