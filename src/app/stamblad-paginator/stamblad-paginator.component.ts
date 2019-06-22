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
    this.stob.emitToPriseTable({ bladid: this.num, placeringi: 1 , prislisteid: 1, aar: this.data.getFullYear()});
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
      this.stob.emitToPriseTable({ bladid: this.num, placeringi: 1 , prislisteid: 1, aar: this.data.getFullYear()});
    }
  }



  nextStamblad() {
    this.minDisable = true;
    if (this.num + 1 <= this.maxNumber) {
      this.num = this.num + 1;
      if (this.num !== 1 ) {
        this.stob.emitStamBladChange({id: this.num});
        this.stob.setKontaktBladId(this.num);
        this.stob.emitToPriseTable({ bladid: this.num, placeringi: 1 , prislisteid: 1, aar: this.data.getFullYear()});

      }
    }
  }

  goToLastPage() {
    console.log('Max '  + this.maxNumber);
    this.num = this.maxNumber;
    this.stob.emitStamBladChange({id: this.maxNumber});
    this.stob.emitToPriseTable({ bladid: this.num, placeringi: 1 , prislisteid: 1, aar: this.data.getFullYear()});
  }

  goFirstPage() {
    this.num = 0;
    this.stob.emitStamBladChange({id: 0});

    this.stob.emitToPriseTable({ bladid: this.num, placeringi: 1 , prislisteid: 1, aar: this.data.getFullYear()});
  }
}
