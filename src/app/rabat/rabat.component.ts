import { Component, OnInit } from '@angular/core';
import {EjerforholdService} from '../services/ejerforhold.service';
import {Ejerforhold} from '../models/ejerforhold';
import {StamBladViewModel} from '../models/StamBladViewModel';
import {StamdataService} from '../services/stamdata.service';

@Component({
  selector: 'app-rabat',
  templateUrl: './rabat.component.html',
  styleUrls: ['./rabat.component.scss']
})
export class RabatComponent implements OnInit {

  data: Ejerforhold[];
  stamData: StamBladViewModel[];
  selectedEjerforhold;
  constructor(private  es: EjerforholdService, private  st: StamdataService) {
    this.getEjerforhold();
  }

  ngOnInit() {
  }

  getEjerforhold() {
    this.es.GetAllEjerforhold().subscribe(value =>  {
      this.data = value;
    });
  }

  setStamDataByEjerforhold() {
    this.st.GetStamBladByEjerforHold(this.selectedEjerforhold).subscribe( value => {
    this.stamData = value;
    });
  }
}
