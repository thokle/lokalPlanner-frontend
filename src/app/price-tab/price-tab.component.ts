import {Component, OnInit, ViewChild} from '@angular/core';
import {PriceService} from '../services/price.service';
import {StamBladObserver} from '../stam-blad-observer';
import {BladpriceView} from '../models/bladprice-view';
import {PriceListItem} from '../models/price-list-item';
import {PlaceringListItem} from '../models/placering-list-item';
import {PlaceringModel} from '../models/placering-model';
import {PlaceringServiceService} from '../services/placering-service.service';

import {combineAll} from 'rxjs/operators';
import {PricetableComponent} from '../pricetable/pricetable.component';
import {PriceWeekItem} from '../models/price-week-item';
import {PriceWeekComponent} from '../price-week/price-week.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {PriceDialogComponent} from '../price-dialog/price-dialog.component';
import {PriceBladAarService} from '../services/price-blad-aar.service';

@Component({
  selector: 'app-price-tab',
  templateUrl: './price-tab.component.html',
  styleUrls: ['./price-tab.component.scss']
})
export class PriceTabComponent implements OnInit {

  placeringListItems: PlaceringListItem[];
  priseListItemns: PriceListItem[];
  years: number[] = [];
  priser: BladpriceView[];
  selctedPriceItem;
  selectedPlacringItemn: PlaceringListItem;
selected;
selectedYear  = new Date().getFullYear();
bladId = 0;
year = 2019;

@ViewChild(PricetableComponent, { static: false})
private  priveTable: PricetableComponent;

  listPlaceringTabItems: PlaceringModel[];
  constructor(private ps: PriceService, private obs: StamBladObserver, private  pls: PlaceringServiceService, private  dialog: MatDialog,
              private bas: PriceBladAarService, private  snack: MatSnackBar) {
    this.obs.getStamBladEventEmitter().subscribe( value => {
      this.bladId = value.id;

      this.getPriser(value);

    });
  }

  private getPriser(value) {
    this.ps.GetPriserByBladId(value.id).subscribe(value1 => {
      this.priser = value1;
    });
  }

  private  setPriceListItems() {
    this.ps.GetPriseItemListe().subscribe(value =>  {
      this.priseListItemns = value;
    });
  }


  private setPlaceringItem() {
    this.ps.GetPlaceringListItem().subscribe(value => {
      this.placeringListItems = value;
    });
  }

  private  setYears() {

    const data = new Date();
    for (let i = data.getFullYear(); i < 2040; i++) {
      this.years.push(i);
    }
  }
  ngOnInit() {
   this.setSidePlaceringListe();
    this.setSidePlaceringListe();
    this.obs.getStamBladEventEmitter().subscribe( value => {
      this.bladId = value.id;
      this.getPriser(value);

    });
    this.setPriceListItems();
    this.setPlaceringItem();
    this.setYears();
    this.setSidePlaceringListe();

  }

  private  setSidePlaceringListe() {
    this.pls.getPlaceringer().subscribe( value =>  {
      this.listPlaceringTabItems = value;
      console.log(this.placeringListItems);
    });
  }

  setPosition() {

      const id_ = this.selctedPriceItem || 1;

      this.obs.setPriceTable({ id: this.bladId , prisListe: id_, year: this.selectedYear});
    }

  public selectedPriseList(element) {
    if (element !== undefined) {
    const l: PlaceringModel = this.listPlaceringTabItems.find(value => value.PlaceringID === element.index + 1 );
    let id_ = this.selctedPriceItem || 1;
    let bladid = 0;
  //  console.log(element.tab.textLabel + ' ' + this.selctedPriceItem);
    if (this.bladId === undefined) {
      this.bladId = 0;
      bladid = 0;
      id_ = 1;
    } else {
      bladid = this.bladId;
    }
    this.obs.emitToPriseTable({ bladid: bladid , placeringi: l.PlaceringID , prislisteid: id_, aar: this.year});
  }
  }


  public openCreatenewPriceDialog(event: MouseEvent) {


if (event.button === 0) {
  this.dialog.open(PriceDialogComponent, {data: ['bladid', this.dialog], height: '70%', width: '30%'})
    .afterClosed().subscribe(value => {
    const selectd = value.resultat[0].selectedItemId;
    const year = value.resultat[0].year;
    this.bas.creaePriceBladPrAar(this.bladId, selectd, year).subscribe(value1 => {
    }, error1 => {
    }, () => {

    });
    console.log(value.resultat[0].selectedItemId);
    this.ps.createWeeksPrices(this.bladId, selectd, year).subscribe(value1 => {
      this.snack.open('Pris liste år er oprettet', null, {duration: 4000});
    });
  });
}
  }

  setPrisList() {
    this.obs.emitToPriseTable({placeringi: 1, prislisteid: 1 , aar: this.selectedYear, bladid: this.bladId });
    this.obs.emitStamBladChange({id: this.bladId, year: this.selectedYear});
  }
}
