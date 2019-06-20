import {Component, Input, OnInit} from '@angular/core';
import {PriceService} from '../services/price.service';
import {PriceWeekItem} from '../models/price-week-item';
import {PriceListItem} from '../models/price-list-item';
import {StamBladObserver} from '../stam-blad-observer';
import {v} from '@angular/core/src/render3';
import {MatDialog} from '@angular/material';
import {PriceWeeTypeDialogComponent} from '../price-wee-type-dialog/price-wee-type-dialog.component';

@Component({
  selector: 'app-price-week',
  templateUrl: './price-week.component.html',
  styleUrls: ['./price-week.component.css']
})
export class PriceWeekComponent implements OnInit {

@Input()
bladid;
priceListWeekItenm: PriceWeekItem[] = [];
priceList: PriceListItem[] = [];
  @Input()
  year;

  selectedPrisListId;
  constructor(private ps: PriceService , private obs: StamBladObserver, private  dialog: MatDialog) {
    obs.getStamBladEventEmitter().subscribe(av => {
      if (av.id !== undefined && this.year !== undefined) {
        ps.GetPriceWeekListPrBladId(av.id, this.year).subscribe(value => {
          this.priceListWeekItenm = value;
        });
      } else  if (av.id === undefined) {
        ps.GetPriceWeekListPrBladId(0, this.year).subscribe(value => {
          this.priceListWeekItenm = value;
        });
      }
    });

  }
  ngOnInit() {
    this.obs.getStamBladEventEmitter().subscribe(av => {
     this.ps.GetPriceWeekListPrBladId(av.id, this.year).subscribe( value => {
        this.priceListWeekItenm = value;
        console.log(this.priceListWeekItenm);
      });
  });
  }


  setYear(year) {
    this.year = year;
  }



  update(item2: any) {
    const priceListWeekItem: PriceWeekItem = item2;

    this.dialog.open(PriceWeeTypeDialogComponent, {height: '15%', width: '14%'}).afterClosed().subscribe(value => {
      priceListWeekItem.PrislisteID = value.data;
      priceListWeekItem.BladID = this.bladid.id;
      this.ps.updatePriceIdOnWeek(priceListWeekItem).subscribe(value1 => {
        this.ps.GetPriceWeekListPrBladId(priceListWeekItem.BladID, this.year).subscribe( value2 => {
          this.priceListWeekItenm = value2;
          console.log(this.priceListWeekItenm);
        });
      });
    });
  }
}
