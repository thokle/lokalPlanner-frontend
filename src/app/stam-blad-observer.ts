import {$} from 'protractor';
import {EventEmitter} from '@angular/core';
import {SetPrisListTable} from './models/set-pris-list-table';

export  interface StamBladPagerId {
  id: number;
}

export  interface PrisersTable {
prisListe;
id;
year;
}
export class StamBladObserver {
  private observable: EventEmitter<any> = new EventEmitter();


  private stambladPagerChanged: EventEmitter<StamBladPagerId> = new EventEmitter<StamBladPagerId>();
  private  stamBladOprettetChanged: EventEmitter<number> = new EventEmitter<number>();
  private daekningBladidChangeed: EventEmitter<number> = new EventEmitter<number>();
  private kontakBladId: EventEmitter<number> = new EventEmitter<number>();
  private postNummer: EventEmitter<number> = new EventEmitter<number>();

  private emitPriosetable: EventEmitter<SetPrisListTable> = new EventEmitter<SetPrisListTable>();
  public emitChange(o: any) {

    this.observable.emit(o);
  }

  public  emitToPriseTable(o: SetPrisListTable) {
    this.emitPriosetable.emit(o);

  }

  public  getToTableEmitter(): EventEmitter<SetPrisListTable> {return this.emitPriosetable;
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

  public getDaekningEventEmitter(): EventEmitter<number> {
    return this.daekningBladidChangeed;
  }

  public setDaekninkId(id: any) {
    this.daekningBladidChangeed.emit(id);
  }

  public getKontaktBladId(): EventEmitter<number> {
    return this.kontakBladId;
  }

  public setKontaktBladId(id: any) {
    return this.kontakBladId.emit(id);
  }

  public setPostNr(postNummer: number) {
    this.postNummer.emit(postNummer);
  }

  public getPostNummerObserver(): EventEmitter<number> {
    return this.postNummer;
  }
}
