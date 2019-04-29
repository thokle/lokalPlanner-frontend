import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {BladdaekningService} from '../services/bladdaekning.service';
import {BladDaekning} from '../models/blad-daekning';
import {StamBladObserver} from '../stam-blad-observer';
import {MatDialog, MatSnackBar} from '@angular/material';
import {EditBladdaekningComponent} from './edit-bladdaekning/edit-bladdaekning.component';
import {b} from '@angular/core/src/render3';


@Component({
  selector: 'app-blad-daekning',
  templateUrl: './blad-daekning.component.html',
  styleUrls: ['./blad-daekning.component.css']
})
export class BladDaekningComponent implements OnInit {

  data: BladDaekning[];


  show = false;
  @Input()
 bladid;

  constructor(private dk: BladdaekningService, private obs: StamBladObserver, private  dialog: MatDialog, private snack: MatSnackBar) {


    this.obs.getDaekningEventEmitter().subscribe( blad => {
      console.log(' Bladdækning  '  +  this.bladid);
      this.bladid = blad;
     this.getBladDaekningByBladId(blad);
    });

  }

  ngOnInit() {

  }




  tilFfoejDeakningGrrap() {
    const data = [{'selected' : 'selected'}, {'bladid': this.bladid}, {'update': 0} ];
    this.dialog.open(EditBladdaekningComponent, {data: data , width: '20%', height: '60%'}).afterClosed().subscribe(value => {
      this.snack.open('Dæknings grad er oprettet ', ' ', {duration: 4000});
      this.getBladDaekningByBladId(this.bladid);
    });

  }

  opdatereDaekningGrad(selected: any) {
  const data = [{'selected' : selected}, {'update': 1} ];
    this.dialog.open(EditBladdaekningComponent,  {data:  data, width: '20%', height: '60%'}).afterClosed().subscribe(value => {
      this.snack.open('Dækning grad er opdateret ', ' ', {duration: 4000});
      this.getBladDaekningByBladId(this.bladid);
    });
  }

  private  getBladDaekningByBladId(bladid) {
    this.dk.getByBladId(bladid).subscribe( value =>  {
      this.data = value;
      if (this.data.length > 0 ) {
        this.bladid = this.data[0].BladID1;
        this.show = true;
      } else {
        this.show = false;
      }
    });
  }

}
