import { Component, OnInit } from '@angular/core';
import {StamdataService} from '../services/stamdata.service';

@Component({
  selector: 'app-stam-blad-over-sigt',
  templateUrl: './stam-blad-over-sigt.component.html',
  styleUrls: ['./stam-blad-over-sigt.component.css']
})
export class StamBladOverSigtComponent implements OnInit {

  constructor(private  st: StamdataService) { }

  ngOnInit() {
  }





}
