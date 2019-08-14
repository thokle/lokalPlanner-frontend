import {Component, Input, OnInit} from '@angular/core';
import {StamBladObserver} from '../stam-blad-observer';

@Component({
  selector: 'app-stamblad-paginator',
  templateUrl: './stamblad-paginator.component.html',
  styleUrls: ['./stamblad-paginator.component.css']
})
export class StambladPaginatorComponent implements OnInit {

  @Input() num:  number;
  @Input() maxNumber: number;
  @Input() minNumber: number;

  minDisable: boolean;
  maxDisable: boolean ;
  data: Date = new Date();
  constructor(private  stob: StamBladObserver) {
    this.stob.emitStamBladChange({id: 0});
    this.stob.setPriceTable({id: 0, prisListe : 1, year: new Date().getFullYear() });
    this.stob.setKontaktBladId(0);
    this.stob.setPriceWeekSubjcet(0);
this.stob.setBladTilaeg(0, 'no');
    this.stob.emitToPriseTable({bladid: 0, aar: new Date().getFullYear() , prislisteid: 0, placeringi: 0});
    this.stob.setCreateYear(0);
  }

  /**
   * bladid: number;
   placeringi: number;
   aar: number;
   prislisteid: number;
   */
  ngOnInit() {

    this.minDisable = true;
    this.maxDisable = true;
  }


  previewStamblad() {
    if (this.num === this.minNumber) {
      this.minDisable = false;
    } else if (this.num > 0) {
      this.minDisable = true;
      this.num = this.num - 1;
      this.stob.emitStamBladChange({id: this.num});
      this.stob.getToTableEmitter();
      this.stob.setPriceTable({year: new Date().getFullYear(), prisListe: 1, id: this.num  });
      this.stob.setKontaktBladId(this.num);
      this.stob.setPriceWeekSubjcet(this.num);
    }
  }



  nextStamblad() {
    this.minDisable = true;
    if (this.num + 1 <= this.maxNumber) {
      this.num = this.num + 1;
      if (this.num !== 1 ) {
        this.stob.emitStamBladChange({id: this.num});
        this.stob.setKontaktBladId(this.num);
        this.stob.setPriceTable({year: new Date().getFullYear(), prisListe: 1, id: this.num  });
        this.stob.setKontaktBladId(this.num);
        this.stob.setPriceWeekSubjcet(this.num);
      }
    }
  }

  goToLastPage() {
    this.stob.getStamBladEventEmitter().subscribe( value => {
      this.maxNumber = value.id;
    });
 console.log('Max '  + this.maxNumber);
    this.num = this.maxNumber;
    this.stob.emitStamBladChange({id: this.maxNumber});
    this.stob.setPriceTable({year: new Date().getFullYear(), prisListe: 1, id: this.num  });
    this.stob.setKontaktBladId(this.num);
    this.stob.setPriceWeekSubjcet(this.num);
  }

  goFirstPage() {
    this.num = 0;
    this.stob.emitStamBladChange({id: 0});

    this.stob.setPriceTable({year: new Date().getFullYear(), prisListe: 1, id: this.num  });
    this.stob.setKontaktBladId(this.num);
    this.stob.setPriceWeekSubjcet(this.num);
  }
}
