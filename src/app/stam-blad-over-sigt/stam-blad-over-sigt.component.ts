import { Component, OnInit } from '@angular/core';
import {StamdataService} from '../services/stamdata.service';
import {StamBladObserver} from '../stam-blad-observer';

@Component({
  selector: 'app-stam-blad-over-sigt',
  templateUrl: './stam-blad-over-sigt.component.html',
  styleUrls: ['./stam-blad-over-sigt.component.css']
})
export class StamBladOverSigtComponent implements OnInit {

  constructor(private  st: StamdataService, private obs: StamBladObserver) { }

  ngOnInit() {
  }

  public  addStamBlad(stamblad: any) {
    let el = (document.getElementById('id')) as HTMLTableRowElement;

    this.obs.emitChange(el);
  }



}
