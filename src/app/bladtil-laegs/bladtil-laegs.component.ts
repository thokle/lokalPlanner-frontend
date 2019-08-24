import {Component, Input, OnInit} from '@angular/core';
import {BladtilaegService} from '../services/bladtilaeg.service';
import {Bladtillaegs} from '../models/bladtillaegs';
import {StamBladObserver} from '../stam-blad-observer';
import {BladtilaegtypeService} from '../services/bladtilaegtype.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {BladtilLaegstypeComponent} from '../bladtil-laegstype/bladtil-laegstype.component';
import {BladtilLaegsDialogComponent} from '../bladtil-laegs-dialog/bladtil-laegs-dialog.component';

@Component({
  selector: 'app-bladtil-laegs',
  templateUrl: './bladtil-laegs.component.html',
  styleUrls: ['./bladtil-laegs.component.scss']
})
export class BladtilLaegsComponent implements OnInit {


  isBladtillaeg = false;
  bladtillags: Bladtillaegs[] = [];
bladid = 0;
  constructor(private bts: BladtilaegService, private obs: StamBladObserver,
              private  bt: BladtilaegtypeService, private  snack: MatSnackBar, private  dialog: MatDialog) {
    this.GetBladTIllaegs();
  }

  ngOnInit() {
    this.GetBladTIllaegs();
  }

  private GetBladTIllaegs() {
    this.obs.getBladTilLaeg().subscribe(v => {
      this.bladid = v.bladid;
      if (v.reset !== 'yes') {
        this.bts.GetBladTilLaegsByBladId(v.bladid).subscribe(value => {
          this.bladtillags = value;
          if (this.bladtillags.length > 0) {
            this.isBladtillaeg = true;
          } else {
            this.isBladtillaeg = false;
          }
        });
      } else {
        this.bladtillags = [];
        this.isBladtillaeg = false;
      }
    });
  }


    public  CreatBladTillaegsType() {
      this.dialog.open(BladtilLaegstypeComponent, {width: '30%', height: '25%' }).afterClosed().subscribe(value => {
        console.log(value.type);
        this.bt.CreateBladTillaegsType({type: value.type}).subscribe(value1 => {

          this.snack.open('Blad tillægs type er oprettet' , ' '   , { duration: 4000});
        }, error1 => {
          this.snack.open('Der er sket en fejl' , ' '  , { duration: 4000});
        });
      });
    }

    public CreateBladTillaegs() {
        this.dialog.open(BladtilLaegsDialogComponent, {width: '20%', height: '30%'}).afterClosed().subscribe(value => {
          this.bts.CreateTilLaegs({ bladId:  this.bladid,  typeId:  value.type,  pris:  value.pris}).subscribe(value1 => {
            this.bts.GetBladTilLaegsByBladId(this.bladid).subscribe(value2 => {
              this.bladtillags = value2;
              if (this.bladtillags.length > 0 ) {
                this.isBladtillaeg = true;
              } else {
                this.isBladtillaeg = false;
              }
            });
            this.snack.open('Tilæg til blad er oprettet', '', {duration: 4000});
          });
        });
    }


}
