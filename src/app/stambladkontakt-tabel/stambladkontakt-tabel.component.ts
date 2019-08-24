import {Component, Input, OnInit} from '@angular/core';
import {StamBladKontaktPersonService} from '../services/stam-blad-kontakt-person.service';
import {StambladKontaktPerson} from '../models/stamblad-kontakt-person';
import {StamBladObserver} from '../stam-blad-observer';

@Component({
  selector: 'app-stambladkontakt-tabel',
  templateUrl: './stambladkontakt-tabel.component.html',
  styleUrls: ['./stambladkontakt-tabel.component.scss']
})
export class StambladkontaktTabelComponent implements OnInit {

  @Input()
  bladid;

  emaillist: string[] = [];
  kontaktData: StambladKontaktPerson[];
  constructor(private ks: StamBladKontaktPersonService, private  obs: StamBladObserver) {
    this.obs.getStamBladEventEmitter().subscribe(s => {
      this.ks.GetStamBladKontakts(s.id).subscribe(value => {
        this.kontaktData = value;
      });
    });
  }

  ngOnInit() {
    this.obs.getStamBladEventEmitter().subscribe(s => {
      this.ks.GetStamBladKontakts(s.id).subscribe(value => {
        this.kontaktData = value;
      });
    });

  }


  selectEmail(select_: StambladKontaktPerson) {
    this.emaillist.push(select_.KontakPersonEmail);
  }

  send() {

  }

}
