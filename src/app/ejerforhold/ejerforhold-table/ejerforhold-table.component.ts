import {Component, Input, OnInit} from '@angular/core';
import {StamdataService} from '../../services/stamdata.service';
import {StamBladViewModel} from '../../models/StamBladViewModel';

@Component({
  selector: 'app-ejerforhold-table',
  templateUrl: './ejerforhold-table.component.html',
  styleUrls: ['./ejerforhold-table.component.css']
})
export class EjerforholdTableComponent implements OnInit {

  stamData: StamBladViewModel[];
  constructor(private  st: StamdataService) {

  }

  ngOnInit() {

  }



}
