import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stamblad-paginator',
  templateUrl: './stamblad-paginator.component.html',
  styleUrls: ['./stamblad-paginator.component.css']
})
export class StambladPaginatorComponent implements OnInit {

  @Input() num:  number

  constructor() { }

  ngOnInit() {
  }


  previewStamblad() {
      if (this.num > 0) {
        this.num = this.num - 1;
      }
  }


  nextStamblad() {
    this.num = this.num + 1;
  }
}
