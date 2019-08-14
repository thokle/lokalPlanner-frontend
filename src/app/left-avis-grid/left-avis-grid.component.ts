import {Component, OnInit, ViewChild} from '@angular/core';
import {AktiveaviserService} from '../services/aktiveaviser.service';
import {MatTableDataSource} from '@angular/material';
import {AktiveAviser} from '../models/aktive-aviser';
import {IgxGridComponent, ISortingExpression} from 'igniteui-angular';


export class Group {
  level = 0;
  parent: Group;
  expanded = true;
  totalCounts = 0;
  get visible(): boolean {
    return !this.parent || (this.parent.visible && this.parent.expanded);
  }
}
@Component({
  selector: 'app-left-avis-grid',
  templateUrl: './left-avis-grid.component.html',
  styleUrls: ['./left-avis-grid.component.css']
})
export class LeftAvisGridComponent implements OnInit {
  title = 'Grid Grouping';


  _alldata: AktiveAviser[] = [];
  @ViewChild('grid', { read: IgxGridComponent, static: true })
  public grid1: IgxGridComponent;
  public data;
  public expr: ISortingExpression[];


  constructor(
    protected dataSourceService: AktiveaviserService,
  ) {

  }

  ngOnInit() {
    this.dataSourceService.GetAllUgeAvierTilGrid().subscribe(value => {
      this._alldata = value.data;
    });

  }


}
