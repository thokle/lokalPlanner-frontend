import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-yeardialog',
  templateUrl: './yeardialog.component.html',
  styleUrls: ['./yeardialog.component.css']
})
export class YeardialogComponent implements OnInit {

  years: number[] = [];
  seletedYear;
  constructor() {
  }

  ngOnInit() {
  }

  private setYears() {
    for (let i = 2013; i <= 2030; i++) {
      this.years.push(i);
    }
  }

  addYearToMemory() {

  }
}
