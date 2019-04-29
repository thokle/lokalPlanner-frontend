import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {BladdaekningService} from '../services/bladdaekning.service';
import {BladDaekning} from '../models/blad-daekning';
import {StamBladObserver} from '../stam-blad-observer';
import {MatDialog} from '@angular/material';
import {EditBladdaekningComponent} from './edit-bladdaekning/edit-bladdaekning.component';


@Component({
  selector: 'app-blad-daekning',
  templateUrl: './blad-daekning.component.html',
  styleUrls: ['./blad-daekning.component.css']
})
export class BladDaekningComponent implements OnInit {

  data: BladDaekning[];


  show = false;

 bladid;

  constructor(private dk: BladdaekningService, private obs: StamBladObserver, private  dialog: MatDialog) {


    this.obs.getDaekningEventEmitter().subscribe( blad => {
      console.log(' Bladdækning  '  + blad);
      this.dk.getByBladId(blad).subscribe( value =>  {
        this.data = value;
        if (this.data.length > 0 ) {
          this.bladid = this.data[0].BladID1;
          this.show = true;
        } else {
          this.show = false;
        }
      });
    });

  }

  ngOnInit() {

  }




  tilFfoejDeakningGrrap() {
    const data = [{'selected' : 'selected'}, {'update': 0} ];
    this.dialog.open(EditBladdaekningComponent, {data: data , width: '20%', height: '60%'}).afterClosed().subscribe(value => {
      this.show = true;
    });

  }

  opdatereDaekningGrad(selected: any) {
  const data = [{'selected' : selected}, {'update': 1} ];
    this.dialog.open(EditBladdaekningComponent,  {data:  data, width: '20%', height: '60%'}).afterClosed().subscribe(value => {

    });
  }

}
