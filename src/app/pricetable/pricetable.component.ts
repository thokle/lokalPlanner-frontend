import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Prisers} from '../models/Prisers';

import {PrisersTable, StamBladObserver} from '../stam-blad-observer';
import {PriceService} from '../services/price.service';

import {MatDialog, MatSnackBar} from '@angular/material';

import {PlaceringServiceService} from '../services/placering-service.service';
import {PlaceringModel} from '../models/placering-model';
import {PriceListPositionDialogComponent} from '../price-list-position-dialog/price-list-position-dialog.component';



@Component({
  selector: 'app-pricetable',
  templateUrl: './pricetable.component.html',
  styleUrls: ['./pricetable.component.css']
})
export class PricetableComponent implements OnInit {
  placeriger: PlaceringModel[] = [];
  selectedPlacering;
  i = 1;
  listtoSave: number[] = [1];
  map = new Map();
  d: Date = new Date();
  public prisList: Prisers[];
  hasCounted = false;
  placeringId;
  prislisteId;
  yaer;
  bladid;
  hasPlacering = false;
  betegenlse = '';

  constructor(private obs: StamBladObserver, private ps: PriceService,
              private snack: MatSnackBar, private  poss: PlaceringServiceService, private dialog: MatDialog) {
    console.log('Full year ' + this.d.getFullYear());

  }


  ngOnInit() {
    this.setTable();
    this.setPositions();
  }


  addtoMap(event: any, id: string) {

    if (event.type === 'focusout') {
      const html: string = (<HTMLInputElement>document.getElementById(id)).value;
      this.map.set(id, Number(html));
      this.setFormatLinje();
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
    this.obs.getPriceTableSubject().subscribe(v => {
      this.prisList = [];
      this.bladid = v.id;
      this.prislisteId = v.prisListe;
      this.yaer = v.year;
      this.ps.GetPriserForTable(this.bladid, this.prislisteId, this.yaer).subscribe(va => {
        this.prisList = va;
        this.hasPlacering = false;

      });
    });

  }

  public addPris() {
    const pl: Prisers = {};
    pl.FarveMin1 =  this.getValue(this.map , '1min');
    pl.FarveMax1 =  this.getValue(this.map , '1max');
    pl.Farve4Min1 =  this.getValue(this.map , '4min');
    pl.Farve4Max1 = this.getValue(this.map , '4max');
    pl.MmPris = this.getValue(this.map , 'mmPris');
    pl.FarvePris1 = this.getValue(this.map, '1farve');
    pl.FormatTil1 =  this.getValue(this.map , 'til');
    pl.Farve4Pris1 =  this.getValue(this.map , '4farve');
    pl.FormatFra1 = this.getValue(this.map, 'fra');
    pl.AAr1 = this.yaer === undefined ? new Date().getFullYear() : this.yaer;
    pl.PlaceringId1 = this.selectedPlacering === undefined ? this.placeringId : this.selectedPlacering ;
    pl.PrislisteID1 = this.prislisteId === undefined ? 1 : this.prislisteId;

    this.ps.createPriserTable(pl).subscribe(value => {

      this.ps.GetPriserForTable(this.bladid, this.prislisteId === undefined ? 1 :
        this.prislisteId , this.yaer === undefined ? new Date().getFullYear() : this.yaer).subscribe(value1 => {
        this.prisList = value1;
        this.listtoSave = [];
        this.hasCounted = false;
        this.hasPlacering = false;
        this.snack.open('Priser er oprettet ', '', {duration: 4000});
        this.listtoSave.push(this.i++);
      });

    });
  }

  addRow(i: number) {

    this.addPris();
  }

  public delete(item: Prisers) {
    this.ps.deletePriser(item).subscribe(value => {
      this.ps.GetPriserForTable(item.BladID1,  item.PrislisteID1, item.AAr1).subscribe(va => {
        this.prisList = va;
        this.hasPlacering = false;

      });
      this.snack.open('Pris er blevet slettet', '', {duration: 4000});
      this.setTable();
    }, error1 => {
      this.snack.open('Pris er ikke slettet noget gik galt', ' ', {duration: 4000});

    });
  }

  private setPositions() {
    this.poss.getPlaceringer().subscribe(value => {
      this.placeriger = value;
    });
  }

  public setFormatLinje() {
    if (this.map.get('fra') < 2 && this.map.get('til') < 2 && this.hasCounted === false) {
      this.listtoSave.push(this.i++);
      this.hasCounted = true;
    }
  }


  vaelgPlacering() {
    this.dialog.open(PriceListPositionDialogComponent, {width: '30%', height: '20%'}).afterClosed().subscribe(value => {
      this.selectedPlacering = value.PlaceringID;
      this.betegenlse = value.Betegnelse;
      this.hasPlacering = true;
    });
  }

  private getValue(m: Map<string, number>, key: string) {
    let val =  Number(m.get(key)) ;
    console.log(val);
    if (Number.isNaN(val)) {
      val = 0;
    } else {
      val = val;
    }
    return val;

  }
}
