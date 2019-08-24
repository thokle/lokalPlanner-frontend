import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MovePaperService} from '../services/move-paper.service';
import {MediePlanAvisService} from '../services/medie-plan-avis.service';
import {AktiveAviser} from '../models/aktive-aviser';
import {MediePlanAvisModel} from '../models/medie-plan-avis-model';
import {IgxGridComponent, ISortingExpression} from 'igniteui-angular';
import {BehaviorSubject, Observable} from 'rxjs';
import {IgxCell} from 'igniteui-angular/lib/core/grid-selection';

@Component({
  selector: 'app-medieplan',
  templateUrl: './medieplan.component.html',
  styleUrls: ['./medieplan.component.scss']
})
export class MedieplanComponent implements OnInit, AfterViewInit {
  @ViewChild('grid', { read: IgxGridComponent, static: true })
  public grid: IgxGridComponent;
  public data;
  public expr: ISortingExpression[];
  editable = true;
  ObsPaper;
  aktiveAviser = new  BehaviorSubject< MediePlanAvisModel[]>([]);
  dataFromCall: MediePlanAvisModel[] = [];
  constructor(private ms: MovePaperService, private mps: MediePlanAvisService) {
  }

  ngOnInit() {


  }

  ngAfterViewInit(): void {
    this.grid.reflow();
  }

  public updateCell(cell: IgxCell) {
    cell.value = 'test';
  }

}
