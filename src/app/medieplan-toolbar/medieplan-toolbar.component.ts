import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {PlaceringServiceService} from '../services/placering-service.service';
import {PlaceringModel} from '../models/placering-model';
import {BureauService} from '../services/bureau.service';
import {AnnonceService} from '../services/annonce.service';
import {Bureau} from '../models/bureau';
import {Annonoer} from '../models/annonoer';
import {MovePaperService} from '../services/move-paper.service';
import {MediePlanAvisService} from '../services/medie-plan-avis.service';
import {
  IgxColumnComponent,
  IgxExcelExporterOptions,
  IgxExcelExporterService,
  IgxGridCellComponent,
  IgxGridComponent, IgxGridRowComponent,
  ISortingExpression
} from 'igniteui-angular';
import {BehaviorSubject, timer} from 'rxjs';
import {MediePlanAvisModel} from '../models/medie-plan-avis-model';
import {MediePlan} from '../models/medie-plan';
import {MediePlanService} from '../services/medie-plan.service';
import {MediePlanLinjerService} from '../services/medie-plan-linjer.service';
import {ActivatedRoute} from '@angular/router';
import {IgxCell} from 'igniteui-angular/lib/core/grid-selection';
import {IgxChildGridRowComponent} from 'igniteui-angular/lib/grids/hierarchical-grid/child-grid-row.component';
import {MatDialog} from '@angular/material';
import {GemMedieplanDialogComponent} from '../gem-medieplan-dialog/gem-medieplan-dialog.component';
import {DeakningKortDialogComponent} from '../deakning-kort-dialog/deakning-kort-dialog.component';
import {debounce} from 'rxjs/operators';
import {AktiveaviserService} from '../services/aktiveaviser.service';
import {IgxColumn} from '../models/igx-column';

@Component({
  selector: 'app-medieplan-toolbar',
  templateUrl: './medieplan-toolbar.component.html',
  styleUrls: ['./medieplan-toolbar.component.scss']
})
export class MedieplanToolbarComponent implements OnInit {

  mediePlaId;
  @ViewChild('grid', { read: IgxGridComponent, static: true })
  public grid: IgxGridComponent;
  public data;
  public expr: ISortingExpression[];
  hiswfiwls = true;
  editable = true;
  ObsPaper;
  aktiveAviser = new  BehaviorSubject< MediePlanAvisModel[]>([]);
  dataFromCall: MediePlanAvisModel[] = [];
  placeringer: PlaceringModel[] = [];
  years: number[]  = [];
  weeks: number[] = [];

  bureau: Bureau[] = [];
  annonceer: Annonoer[] = [];
  form: FormGroup;
  overskrift;
  beskrivelse;
  burAnn;
 columns: IgxColumn[] = [];
  resizeable: true;
  constructor(private fb: FormBuilder, private pls: PlaceringServiceService, private  bs: BureauService, private as: AnnonceService,
              private ms: MovePaperService, private mps: MediePlanAvisService, private  mss: MediePlanService,
              private mpj: MediePlanLinjerService, private excelExportService: IgxExcelExporterService,
              private  activeRouter:  ActivatedRoute, private  diaLog: MatDialog) {
    this.activeRouter.params.subscribe(value => {
        console.log(value['medieplanId']);
    });
    this.form = this.fb.group({
      annoncor: ['', Validators.required],
      bureau: [],
      format1: [1, Validators.nullValidator],
      format2: [100, Validators.nullValidator],
      farve_sh : [],
      farve_1: [],
      farve_4: [],
      placering: [],
      uge: [],
      aar: [],
      bemaerkning: [],
      kommentar: []
    });
    this.mss.getLatestMediePlanId().subscribe(value => {
      this.mediePlaId =  Number(value[0].item2) + 1;
    });

    this.ms.getMovePaper().subscribe(value => {
      this.mps.getMediePlanAvis(value.bladid, value.year, 1 ).subscribe( value1 => {
        value1[0].mmTotal = Number(this.form.controls.format2.value).valueOf()  * value1[0].mmPris;
      if (this.columns.length < 1) {
        this.createColumns(value1);
      }
        if (this.grid.data !== null) {
          this.grid.addRow(value1[0]);
        } else {
          this.grid.data = value1;
        }

      });
    }, error => {
      console.log('error ' + error);
    });

  this.setPlaceringer();
  this.setYears();
  this.setWeeks();
  this.setAnnoncer();
  this.setBureau();
  }

  ngOnInit() {
this.form.controls.farve_1.valueChanges.subscribe(value => {

this.columns.push({header: 'Farve1'});
});

  }

  private setPlaceringer() {
      this.pls.getPlaceringer().subscribe(value => {
        this.placeringer = value;
      });
  }

  private  setYears() {
    for ( let i = new Date().getFullYear(); i <= new Date().getFullYear() + 20; i++ )  {
      this.years.push(i);
    }
  }

  private setWeeks() {
    for (let i = 1; i <= 53; i++) {
      this.weeks.push(i);
    }
  }

  private setAnnoncer() {
    this.as.getAnnoncoer().subscribe(value => {
      this.annonceer = value;
    });
}

  private setBureau() {
   this.bs.getBureas().subscribe(value => {
     this.bureau = value;
   });
}

  public filterAnnonør() {

  }
  public filterBurea() {

  }

  public oppenGemDialog() {

  }

  public opretMediePlan() {
this.diaLog.open(GemMedieplanDialogComponent, { width: '20%', height: '15%'}).afterClosed().subscribe(value => {

  this.mss.createMediePLan( {MedieplanNr: this.mediePlaId, Version: 1, AnnoncørNo_ : this.form.controls.annoncor.value,
    BureauNo_ : this.form.controls.bureau.value, Format1: Number(this.form.controls.format1),
    Format2: Number(this.form.controls.format2.value), AntalFarver: this.form.controls.farve.value, DPKulørID: 0, PlaceringID:
    this.form.controls.placering.value, OprettetDato: new Date() , IndrykningsÅr:
      Number(this.form.controls.aar.value), BemærkningTilAnnoncør: this.burAnn, Overskrift: this.overskrift} ).subscribe(value2 => {

  }, error => {}, () => {

  });
});

  }

  public opretMediePlanLinjer() {
    this.grid.data.forEach(value => {

    });
  }
  public exportButtonHandler() {
      this.excelExportService.export(this.grid, new IgxExcelExporterOptions('ExportFileFromGrid'));
    }


    public  expandRow() {
    }

    public openDaekningsKortDialog() {
      this.diaLog.open(DeakningKortDialogComponent, {width: '50%', height: '70%'} );
    }

    public totalSum() {
    const cell: IgxGridCellComponent  = this.grid.selectedCells[0];

    const editValue = cell.editValue;

console.log('row id ' + cell);

    }
    public totalRabat() {
    const cell: IgxGridCellComponent =  this.grid.selectedCells[0];
    const  editValue: number = cell.editValue;

    this.grid.updateCell(editValue * Number(this.form.controls.format1.value).valueOf(), cell.rowIndex, 'mmTotal');

    }




    public  replace(value) {
    let  newString = '';
    if (typeof  value === 'string') {
       newString = value.toString().replace('ae', '').replace('oe', 'ø');
    }
return newString;
  }

  private createColumns(data: MediePlanAvisModel[]) {
    data.forEach(value => {
      this.columns.push({field: value.mmPris, header: this.replace(value.mmPris), ediable: true });
    });
  }
  }

