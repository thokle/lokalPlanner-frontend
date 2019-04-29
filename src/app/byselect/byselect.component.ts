import {Component, Input, OnInit} from '@angular/core';
import {PostNr} from '../models/PostNr';

@Component({
  selector: 'app-byselect',
  templateUrl: './byselect.component.html',
  styleUrls: ['./byselect.component.css']
})
export class ByselectComponent implements OnInit {

  @Input()
  listBy: PostNr[];

  @Input()
  selectedBy = 'bynavn';

  constructor() { }

  ngOnInit() {
  }

}
