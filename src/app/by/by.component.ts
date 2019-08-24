import { Component, OnInit } from '@angular/core';
import {StamdataService} from '../services/stamdata.service';
import {StamBladObserver} from '../stam-blad-observer';

@Component({
  selector: 'app-by',
  templateUrl: './by.component.html',
  styleUrls: ['./by.component.css']
})
export class ByComponent implements OnInit {


  byNavn: string;
  constructor(private st: StamdataService, private os: StamBladObserver) { }

  ngOnInit() {
  }

}
