import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {BladdaekningService} from '../services/bladdaekning.service';
import {BladDaekning} from '../models/blad-daekning';
import {StamBladObserver} from '../stam-blad-observer';
import {MatDialog, MatSnackBar} from '@angular/material';
import {EditBladdaekningComponent} from './edit-bladdaekning/edit-bladdaekning.component';
import {b, v} from '@angular/core/src/render3';


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
    const data = [{'selected' : 'selected'}, {'bladid': this.bladid}, {'update': 'opret'} ];
    this.dialog.open(EditBladdaekningComponent, {data: data , width: '20%', height: '70%'}).afterClosed().subscribe(value => {
      console.log(value);
      this.dk.AddBladDaeknig(value.data).subscribe(value2 => {
        this.snack.open('Dæknings grad er oprettet ', ' ', {duration: 4000});
        this.getBladDaekningByBladId(this.bladid);
      });

    });

  }

  /**
   *  DaekningsGrad1: ['', Validators.nullValidator],
   PostNr1: ['', Validators.nullValidator],
   Oplag1: ['', Validators.nullValidator],
   Postby: ['', Validators.nullValidator],
   BladID1: ['', Validators.nullValidator]
   * @param selected
   */

  opdatereDaekningGrad(selected: any) {
  const data = [{'selected' : selected},  {'bladid': this.bladid}, {'update': 'opdater'} ];
    this.dialog.open(EditBladdaekningComponent,  {data:  data, width: '10%', height: '30%'}).afterClosed().subscribe(value => {
      console.log('data ' + value.data);
const daekning: BladDaekning = {BladID1: value.data.BladID1, Oplag1: value.data.Oplag1, DaekningsGrad1: value.data.DaekningsGrad1,
  PostNr1: value.data.PostNr1, Postby: value.data.Postby };
this.dk.AddBladDaeknig(daekning).subscribe(value1 => {
  this.snack.open('Dækning grad er opdateret ', ' ', {duration: 4000});
  this.getBladDaekningByBladId(this.bladid);

}, error1 => {

  this.getBladDaekningByBladId(this.bladid);
});


    });
  }

  slet(selected: any) {
    const data = [{'selected' : selected},  {'bladid': this.bladid},{'update': 'slet'} ];
    this.dialog.open(EditBladdaekningComponent,  {data:  data, width: '10%', height: '30%'}).afterClosed().subscribe(value => {
      console.log( value.data.BladID1 +  ' ' + value.data.PostNr1);
      this.dk.DeleteDaeknig(value.data.BladID1, value.data.PostNr1 ).subscribe(value1 => {
        this.snack.open('Dækning grad er slettet ', ' ', {duration: 4000});
        this.getBladDaekningByBladId(this.bladid);

      });


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
