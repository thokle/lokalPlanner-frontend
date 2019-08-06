import { Component, OnInit } from '@angular/core';
import {StamBladObserver} from '../stam-blad-observer';
import {MatTableDataSource, MatTreeNestedDataSource} from '@angular/material';
import {AktiveAviser} from '../models/aktive-aviser';

@Component({
  selector: 'app-medieplan-avis-table',
  templateUrl: './medieplan-avis-table.component.html',
  styleUrls: ['./medieplan-avis-table.component.css']
})
export class MedieplanAvisTableComponent implements OnInit {

  constructor(private  obs: StamBladObserver) { }
  datasource = new MatTableDataSource();
  ngOnInit() {
  }



}
