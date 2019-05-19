import { Component, OnInit } from '@angular/core';
import {PriceService} from '../services/price.service';
import {StamBladObserver} from '../stam-blad-observer';
import {BladpriceView} from '../models/bladprice-view';
import {PriceListItem} from '../models/price-list-item';
import {PlaceringListItem} from '../models/placering-list-item';

@Component({
  selector: 'app-price-tab',
  templateUrl: './price-tab.component.html',
  styleUrls: ['./price-tab.component.css']
})
export class PriceTabComponent implements OnInit {

  placeringListItems: PlaceringListItem[];
  priseListItemns: PriceListItem[];
  years: number[] = [];
  priser: BladpriceView[];
  selctedPriceItem: PriceListItem;
  selectedPlacringItemn: PlaceringListItem;
  bladid;
  constructor(private ps: PriceService, private obs: StamBladObserver) {
    this.setPriceListItems();
    this.setPlaceringItem();
    this.setYears();
    this.obs.getStamBladEventEmitter().subscribe( value => {
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
    for (let i = 1970; i < 2040; i++) {
      this.years.push(i);
    }
  }
  ngOnInit() {
  }

}
