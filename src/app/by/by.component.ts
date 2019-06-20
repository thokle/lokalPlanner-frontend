import { Component, OnInit } from '@angular/core';
import {StamdataService} from '../services/stamdata.service';
import {StamBladObserver} from '../stam-blad-observer';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {PostNummerService} from '../services/post-nummer.service';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-by',
  templateUrl: './by.component.html',
  styleUrls: ['./by.component.css']
})
export class ByComponent implements OnInit {


  byNavn: string;
  constructor(private st: PostService, private os: StamBladObserver) {
    this.setByNavn();
  }

  ngOnInit() {
    this.setByNavn();
  }

  private  setByNavn() {
    this.os.getPostNummerObserver().subscribe( value => {
      if (value === 0 ) {
        this.byNavn = '';
      } else {
        this.st.getByNavnByPostnr(value).subscribe(value1 => this.byNavn = value1[0].PostBy);
      }
    });
  }
}
