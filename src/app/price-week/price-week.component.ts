import {Component, Input, OnInit} from '@angular/core';
import {PriceService} from '../services/price.service';
import {PriceWeekItem} from '../models/price-week-item';
import {PriceListItem} from '../models/price-list-item';
import {StamBladObserver} from '../stam-blad-observer';

import {MatDialog} from '@angular/material';
import {PriceWeeTypeDialogComponent} from '../price-wee-type-dialog/price-wee-type-dialog.component';
import {Year} from '../models/year';

@Component({
  selector: 'app-price-week',
  templateUrl: './price-week.component.html',
  styleUrls: ['./price-week.component.scss']
})
export class PriceWeekComponent implements OnInit {

  years: Year[] = [];
@Input()
bladid;
priceListWeekItenm: PriceWeekItem[] = [];
priceList: PriceListItem[] = [];

isData;
isTherePrices = false;
  @Input()
  year;

  selectedYear;
  selectedPrisListId;
  constructor(private ps: PriceService , private obs: StamBladObserver, private  dialog: MatDialog) {

if (this.bladid === undefined ) {
  this.ps.GetPriceWeekListPrBladId(0, new Date().getFullYear()).subscribe(value => {
    this.setYear(0);
    this.priceListWeekItenm = value;
    if ( this.priceListWeekItenm.length > 0) {
      this.isTherePrices = true;
      this.isData = true;
    }
  });
}
    obs.getPriceWeekSubject().subscribe(av => {

     this.ps.GetPriceWeekListPrBladId(av, new Date().getFullYear()).subscribe( value =>  {
       this.priceListWeekItenm = value;
       if ( this.priceListWeekItenm.length > 0) {
         this.isTherePrices = true;
         this.isData = true;
         if ( this.priceListWeekItenm.length > 0) {
           this.isTherePrices = true;
           this.isData = true;
         }
       }
     });
    });
    this.setyears();
  }
  ngOnInit() {
    if (this.bladid === undefined ) {
      this.ps.GetPriceWeekListPrBladId(0, new Date().getFullYear()).subscribe(value => {
        this.priceListWeekItenm = value;
      });
    }
    this.obs.getPriceWeekSubject().subscribe(av => {
     this.ps.GetPriceWeekListPrBladId(av, new Date().getFullYear()).subscribe( value => {
        this.priceListWeekItenm = value;
       if ( this.priceListWeekItenm.length > 0) {
         this.isTherePrices = true;
       }
        console.log(this.priceListWeekItenm);
      });
  });
  }


  setYear(year) {
    this.year = year;
  }



  update(item2: any) {
    let update_year = 0;
    if (this.year === this.selectedYear) {
      update_year  = this.year;
    } else {
      update_year = this.selectedYear;
    }
    const priceListWeekItem: PriceWeekItem = item2;

    this.dialog.open(PriceWeeTypeDialogComponent, {height: '15%', width: '14%'}).afterClosed().subscribe(value => {
      priceListWeekItem.PrislisteID = value.data;
      priceListWeekItem.BladID = this.bladid;
      this.ps.updatePriceIdOnWeek(priceListWeekItem).subscribe(value1 => {
        this.ps.GetPriceWeekListPrBladId(priceListWeekItem.BladID, update_year).subscribe( value2 => {
          this.priceListWeekItenm = value2;
          console.log(this.priceListWeekItenm);
        });
      });
    });
  }


  setyears() {
    this.obs.getCreatedYear().subscribe( c => {
      this.ps.getCreateYears(c).subscribe(value => {
        this.years = value;
      });
    });
  }

  changeYear() {

    this.ps.GetPriceWeekListPrBladId( this.bladid, this.selectedYear).subscribe( value => {
if (value.length > 0 ) {
  this.priceListWeekItenm = value;
  this.isData = true;
} else {
  this.isData = false;
}
    });
  }

}
