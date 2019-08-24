import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AktiveaviserService} from '../services/aktiveaviser.service';
import {MatTableDataSource} from '@angular/material';
import {AktiveAviser} from '../models/aktive-aviser';
import {IgxGridComponent, ISortingExpression, SortingDirection, DefaultSortingStrategy, IgxGridCellComponent} from 'igniteui-angular';
import {StamBladObserver} from '../stam-blad-observer';
import {MovePaperService} from '../services/move-paper.service';

@Component({
  selector: 'app-left-avis-grid',
  templateUrl: './left-avis-grid.component.html',
  styleUrls: ['./left-avis-grid.component.scss']
})
export class LeftAvisGridComponent implements OnInit, AfterViewInit {



  _alldata: AktiveAviser[] = [];
  @ViewChild('grid', { read: IgxGridComponent, static: true })
  public grid: IgxGridComponent;
  public data;
  public expr: ISortingExpression[];
  public searchText = '';
  public caseSensitive = false;
  public exactMatch = false;
  seletedable = false;
  constructor(
    protected dataSourceService: AktiveaviserService, private ms: MovePaperService
  ) {
    this.expr = [
      { dir: SortingDirection.Asc, fieldName: 'GeoKodeNavn', ignoreCase: false,
        strategy: DefaultSortingStrategy.instance() },
      { dir: SortingDirection.Asc, fieldName:  'PostBy', ignoreCase: false,
        strategy: DefaultSortingStrategy.instance() }
    ];
  }

  ngOnInit() {
    this.dataSourceService.GetAllUgeAvierTilGrid().subscribe(value => {
      this._alldata = value;
    });

  }

  ngAfterViewInit(): void {
   const hiddenCOlumns =  this.grid.toolbar.columnHidingUI.hidableColumns.forEach(value => console.log(value));

   console.log('hidden' + hiddenCOlumns);
    this.grid.toolbar.columnHidingUI.columnsAreaMaxHeight = '200px';
  }

  public clearSearch() {
    this.searchText = '';
    this.grid.clearSearch();
  }

  public searchKeyDown(ev) {
    if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
      ev.preventDefault();
      this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
      ev.preventDefault();
      this.grid.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
    }
  }

  public updateSearch() {
    this.caseSensitive = !this.caseSensitive;
    this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
  }

  public updateExactSearch() {
    this.exactMatch = !this.exactMatch;
    this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
  }


  public transferdata(event) {
    const targetCell = event.cell;

    if (!this.seletedable) {

      console.log(targetCell.rowIndex);
      const row =  targetCell.rowData as AktiveAviser;
      console.log(row);
      this.ms.setMovePaper({bladid: row.BladID, year: new Date().getFullYear() });
    }


  }

}
