import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

interface  MovePaper {
  bladid;
  year;
}

@Injectable({
  providedIn: 'root'
})
export class MovePaperService {



  private _paper = new Subject<MovePaper>();
  constructor() { }

  setMovePaper(paper: MovePaper) {
    this._paper.next(paper);

  }
getMovePaper() {
    return this._paper;
}

}
