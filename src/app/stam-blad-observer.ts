import {$} from 'protractor';
import {EventEmitter} from '@angular/core';
import {SetPrisListTable} from './models/set-pris-list-table';
import {Subject} from 'rxjs';
import {Prisers} from './models/Prisers';
import {AktiveAviser} from './models/aktive-aviser';

export  interface StamBladPagerId {
  id?: number;
  year?: number;
}

export  interface PrisersTable {
prisListe;
id;
year;
}

export  interface Avis {
  bladid;
  year;
}
export interface  BladTillægsType {
bladid;
reset;

}


export class StamBladObserver {
  private observable: EventEmitter<any> = new EventEmitter();


  private stambladPagerChanged: EventEmitter<StamBladPagerId> = new EventEmitter<StamBladPagerId>();
  private  stamBladOprettetChanged: EventEmitter<number> = new EventEmitter<number>();
  private daekningBladidChangeed: EventEmitter<number> = new EventEmitter<number>();
  private kontakBladId: Subject<number> = new Subject<number>();
  private postNummer: EventEmitter<number> = new EventEmitter<number>();

  private emitPriosetable: Subject<SetPrisListTable> = new Subject<SetPrisListTable>();
  private priceWeekSubject: Subject<number> = new Subject<number>();
  private  pristList: Subject<PrisersTable> = new Subject();
  private  bladtillaeg: Subject<BladTillægsType> = new Subject();
  private columnsSubjest: Subject<string[]>  = new Subject<string[]>();
  private aktiveAviserSubject: Subject<Avis> = new Subject<Avis>();
private createPriseYears: Subject<number> = new Subject<number>();

public  setCreateYear(b: number) {
  this.createPriseYears.next(b);
}

public  getCreatedYear(): Subject<number> {
 return  this.createPriseYears;
}
  public  setBladTilaeg(bladid: number, reset: string) {
    this.bladtillaeg.next({bladid: bladid, reset: reset });
  }
  public getBladTilLaeg(): Subject<BladTillægsType> {
    return this.bladtillaeg;
  }
  public setAktivAvis(aktivAvis: Avis) {
    this.aktiveAviserSubject.next(aktivAvis);
  }
  public getAktivAvis(): Subject<Avis> {
    return this.aktiveAviserSubject;
  }
  public setColumnList(columns: string[]) {
    this.columnsSubjest.next(columns);
  }

  public getColumnsList(): Subject<string[]> {
    return this.columnsSubjest;
  }
  public emitChange(o: any) {

    this.observable.emit(o);
  }

  public  emitToPriseTable(o: SetPrisListTable) {
    this.emitPriosetable.next(o);

  }

  public  getToTableEmitter(): Subject<SetPrisListTable> {return this.emitPriosetable;
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

  public getKontaktBladId(): Subject<number> {
    return this.kontakBladId;
  }

  public setKontaktBladId(id: any) {
    return this.kontakBladId.next(id);
  }

  public setPostNr(postNummer: number) {
    this.postNummer.emit(postNummer);
  }

  public getPostNummerObserver(): EventEmitter<number> {
    return this.postNummer;
  }

  public setPriceWeekSubjcet(item: number) {
    this.priceWeekSubject.next(item);
  }

  public  getPriceWeekSubject(): Subject<number> {
    return  this.priceWeekSubject;
  }
  public  setPriceTable(item: PrisersTable) {
    this.pristList.next(item);
  }

  public getPriceTableSubject(): Subject<PrisersTable> {
    return  this.pristList;
  }
}
