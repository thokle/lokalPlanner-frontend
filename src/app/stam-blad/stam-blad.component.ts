import { Component, OnInit } from '@angular/core';
import {StamdataService} from '../services/stamdata.service';

@Component({
  selector: 'app-stam-blad',
  templateUrl: './stam-blad.component.html',
  styleUrls: ['./stam-blad.component.css']
})
export class StamBladComponent implements OnInit {

  constructor(private st: StamdataService) {
      }

  ngOnInit() {
    this.st.getStamBladById(2).subscribe(value => console.log(value));
  }

}
