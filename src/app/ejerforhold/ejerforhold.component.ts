import { Component, OnInit } from '@angular/core';
import {EjerforholdService} from '../services/ejerforhold.service';
import {Ejerforhold} from '../models/ejerforhold';
import {StamdataService} from '../services/stamdata.service';
import {EjerforholdTableComponent} from './ejerforhold-table/ejerforhold-table.component';
import {StamBladViewModel} from '../models/StamBladViewModel';
import {ExcelexportService} from '../services/excelexport.service';

@Component({
  selector: 'app-ejerforhold',
  templateUrl: './ejerforhold.component.html',
  styleUrls: ['./ejerforhold.component.css']
})
export class EjerforholdComponent implements OnInit {

  data: Ejerforhold[];
  stamData: StamBladViewModel[];
  selected;
  constructor(private  es: EjerforholdService, private st: StamdataService, private  ex: ExcelexportService) {
    es.GetAllEjerforhold().subscribe(value => {
      this.data = value;
    });
  }

  public  GetStamBladByEjerForhold(ejerforhold: string) {

    this.st.GetStamBladByEjerforHold(ejerforhold).subscribe(value => {
      this.stamData = value;

    });
  }

  public  exportToExcel() {
    this.ex.exportAsExcelFile(this.stamData, 'ejerforhold');
  }
  ngOnInit() {
  }

}
