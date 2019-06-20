import {Component, Input, OnInit} from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';
import {StamBladKontaktPersonService} from '../services/stam-blad-kontakt-person.service';
import {StamBladObserver} from '../stam-blad-observer';
import {visitValue} from '@angular/compiler/src/util';

@Component({
  selector: 'app-vis-kontakter',
  templateUrl: './vis-kontakter.component.html',
  styleUrls: ['./vis-kontakter.component.css']
})
export class VisKontakterComponent implements OnInit {


  emails: string[] = [];
  email;
  constructor(private  sbk: StamBladKontaktPersonService, private  obs: StamBladObserver) {
    this.obs.getKontaktBladId().subscribe(s => {
      console.log(' ss ' + s    );
      this.email = '';
      this.emails = [];
      this.sbk.GetStamBladKontakts(s).subscribe(value => {
        if (value.length > 0) {
          value.forEach(value1 => this.emails.push(value1.KontakPersonEmail));
        }
      }, error1 => {

      }, () => {
        if (this.emails.length > 0) {
          this.createMailListString();
        }
      });
    });

  }

  ngOnInit() {
  }


  sendEmail() {

    window.location.href = 'mailto:' + this.createMailListString() + '?subject=Subject&body=message%20goes%20here';
  }


  createMailListString(): string {
  console.log(this.emails.join(';'));
  this.email = this.emails.join(';');
   return  this.emails.join(';');
  }

}
