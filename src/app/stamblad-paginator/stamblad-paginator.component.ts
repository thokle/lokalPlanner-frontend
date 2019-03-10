import {Component, Input, OnInit} from '@angular/core';
import {StamBladObserver} from '../stam-blad-observer';

@Component({
  selector: 'app-stamblad-paginator',
  templateUrl: './stamblad-paginator.component.html',
  styleUrls: ['./stamblad-paginator.component.css']
})
export class StambladPaginatorComponent implements OnInit {

  @Input() num:  number
  @Input() maxnunber: number
  @Input() minNumber: number;

  minDisable: boolean;
  maxDisable: boolean ;
  constructor(private  stob: StamBladObserver) { }

  ngOnInit() {
    this.minDisable = false;
    this.maxDisable = true;
  }


  previewStamblad() {
    if (this.num === this.minNumber) {
      this.minDisable = false;
    } else if (this.num > 0) {
      this.minDisable = true;
      this.num = this.num - 1;
      this.stob.emitStamBladChange({id: this.num});
    }
  }



  nextStamblad() {
    this.minDisable = true;
    if (this.num + 1 <= this.maxnunber) {
      this.num = this.num + 1;
      this.stob.emitStamBladChange({id: this.num});
    }
  }
}
