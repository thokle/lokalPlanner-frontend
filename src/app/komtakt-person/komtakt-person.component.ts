import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-komtakt-person',
  templateUrl: './komtakt-person.component.html',
  styleUrls: ['./komtakt-person.component.css']
})
export class KomtaktPersonComponent implements OnInit {

  @Input() bladId: number;

  constructor() {
  }

  ngOnInit() {
  }

}

