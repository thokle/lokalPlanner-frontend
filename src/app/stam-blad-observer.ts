import {$} from 'protractor';
import {EventEmitter} from '@angular/core';

export  interface StamBladPagerId {
  id: number;
}
export class StamBladObserver {
  private observable: EventEmitter<any> = new EventEmitter();


  private stambladPagerChanged: EventEmitter<StamBladPagerId> = new EventEmitter<StamBladPagerId>();
  private  stamBladOprettetChanged: EventEmitter<number> = new EventEmitter<number>();

  public emitChange(o: any) {

    this.observable.emit(o);
  }

  public emitStamBladChange(o: StamBladPagerId) {
    this.stambladPagerChanged.emit(o);
  }

  public emitOpretNytStamBlad(o: any) {
    this.stamBladOprettetChanged.emit(0);
  }

  public getStamBladOprettetEmitChangeListener() {
    return this.stamBladOprettetChanged;
  }

  public getStamBladEventEmitter(): EventEmitter<StamBladPagerId> {
    return this.stambladPagerChanged;
  }

  public getEventsEmitter() {
    return this.observable;
  }


}
