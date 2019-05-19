import {Component, Input, OnInit} from '@angular/core';
import {BladpriceView} from '../models/bladprice-view';

@Component({
  selector: 'app-price-builder',
  templateUrl: './price-builder.component.html',
  styleUrls: ['./price-builder.component.css']
})
export class PriceBuilderComponent implements OnInit {

 @Input()
 priser: BladpriceView[]

ControlNavn1;


  constructor() { }

  ngOnInit() {
  }

}
