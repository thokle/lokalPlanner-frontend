import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-price',
  templateUrl: './create-price.component.html',
  styleUrls: ['./create-price.component.css']
})
export class CreatePriceComponent implements OnInit {
  htmlFormat;
  constructor() { }

  ngOnInit() {
  }

  createBody() {
    console.log(this.htmlFormat);
  }
}
