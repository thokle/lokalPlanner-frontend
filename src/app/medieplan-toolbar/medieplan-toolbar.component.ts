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
import {filterErrorsAndWarnings} from '@angular/compiler-cli';
import {MedieplanLinjer} from '../models/MedieplanLinjer';

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
 private  mediePlanAvos: MediePlanAvisModel;
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
  this.createColumns(this.mediePlanAvos);
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
     const mpl: MedieplanLinjer = {};
     this.mpj.CreateMediePlanLinje(mpl);

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

  private createColumns(data: MediePlanAvisModel) {
      this.columns.push({field: data.Adresse, header: 'Adresse' , ediable: false});
      this.columns.push({field: data.Adresse2, header: 'Adresse2', ediable: false});
      this.columns.push({field: data.AnnonceEmail, header: 'Annonce Email', ediable: false});
      this.columns.push({field: data.AnnonceKontrolEmail , header: 'AnnonceKontrol Email', ediable: false});
      this.columns.push({field: data.Betegnelse, header: 'Betegenlse' , ediable: false});
      this.columns.push({field: data.BilagsbladeEmail, header: 'Bilagsblad email', ediable: false});
      this.columns.push({field: data.BladID, header: 'Blad ID', ediable: false});
      this.columns.push({field: data.BogholderiEmails, header: 'Bogholder Emails', ediable: false});
      this.columns.push({field: data.CVR, header: 'CvR', ediable: false});
      this.columns.push({field: data.DagNavn, header: 'Dag navn', ediable: false});
      this.columns.push({field: data.DiMPDelOmrådeKode , header: 'Delmråde kode', ediable: false});
      this.columns.push({field: data.DækningsGrad, header: 'Dækningsgrad', ediable: false});
      this.columns.push({field: data.Emails, header: 'Emails', ediable: false});
      this.columns.push({field: data.DækningsGrad, header: 'Dækningsgrad', ediable: false});
      this.columns.push({field: data.Ejerforhold, header: 'Ejerforhold', ediable: false});
      this.columns.push({field: data.FakturaGruppeID, header: 'Faktura Gruppe id'});
      this.columns.push({field: data.Farve4Max, header: '4 Farve max', ediable: false});
      this.columns.push({field: data.Farve4Min, header: '4 Farve min', ediable: false});
      this.columns.push({field: data.Farve4Pris, header: '4 Farve pris', ediable: false});
      this.columns.push({field: data.FarveMax, header: 'Farve max', ediable: true});
      this.columns.push({field: data.FarveMin, header: 'Farve min', ediable: true});
      this.columns.push({field: data.FarvePris, header: 'Farve pris', ediable: false});
      this.columns.push({field: data.Fax, header: 'Faz', ediable: false});
      this.columns.push({field: data.Format, header: 'Format', ediable: false});
    this.columns.push({field: data.FormatFra, header: 'Format fra', ediable: false});
    this.columns.push({field: data.FormatTil, header: 'Format til', ediable: false});
    this.columns.push({field: data.mmPris, header: 'mmPris', ediable: true});
    this.columns.push({field: data.totalPris, header: 'Total pris' , ediable: true});
    this.columns.push({field: data.bemækningtilAvis, header: 'bemærning til avis', ediable: true});

  }

  private  showTillaegs(){

  }
}

