import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  IgxGridComponent, IgxGridRowComponent, IgxNumberSummaryOperand, IgxSummaryResult,
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

import {MedieplanLinjer} from '../models/MedieplanLinjer';
import {DPKuloerService} from '../services/dpkuloer.service';
import {TilBookingDialogComponent} from '../til-booking-dialog/til-booking-dialog.component';
import {MediePlanNrService} from '../services/medie-plan-nr.service';
class MySummary extends IgxNumberSummaryOperand {

  constructor() {
    super();
  }

  public operate(data?: any[]): IgxSummaryResult[] {
    const result = super.operate(data);

    result.push({
      key: 'test',
      label: 'Test',
      summaryResult: data.filter((rec) => rec > 10 && rec < 30).length
    });

    return result;
  }
}
@Component({
  selector: 'app-medieplan-toolbar',
  templateUrl: './medieplan-toolbar.component.html',
  styleUrls: ['./medieplan-toolbar.component.scss']
})
export class MedieplanToolbarComponent implements OnInit {

  mediePlaId;
  @ViewChild('grid', { read: IgxGridComponent, static: true })
  public grid: IgxGridComponent;
  @ViewChild('grid2', {read: IgxGridComponent, static: true})
  public  grid2: IgxGridComponent;

  @ViewChild('booking',  {static: false}) booking: HTMLDivElement;




  public data;
  public expr: ISortingExpression[];

  ObsPaper;

  placeringer: PlaceringModel[] = [];
  years: number[]  = [];
  weeks: number[] = [];

  bureau: Bureau[] = [];
  annonceer: Annonoer[] = [];
  form: FormGroup;
  overskrift;
  beskrivelse;
  kuloer: any[] = [];

 columns: IgxColumn[] = [];
 private  mediePlanAvos: MediePlanAvisModel;

  erDetKuloer1: boolean;
  opret = false;

  isMiddleDivVisible = false;
  isOpretVisable = false;
  constructor(private fb: FormBuilder, private pls: PlaceringServiceService, private  bs: BureauService, private as: AnnonceService,
              private ms: MovePaperService, private mps: MediePlanAvisService, private  mss: MediePlanService,
              private mpj: MediePlanLinjerService, private excelExportService: IgxExcelExporterService,
              private  activeRouter:  ActivatedRoute, private  diaLog: MatDialog,
              private dpkuls: DPKuloerService,
    private  mprs: MediePlanNrService) {
    this.activeRouter.params.subscribe(value => {
      if (value['medieplanId'] !== undefined) {
        this.erBooking();
        this.mss.getMedieplanById(value['medieplanId']).subscribe(value1 => {
          this.setGridData(value1);


        });
      } else {
this.opret = true;
        this.GetLatestMediePlanNr();

      }
    });

    this.form = this.fb.group({
      annoncor: ['', Validators.required],
      bureau: [],
      format1: [1, Validators.nullValidator],
      format2: [100 , Validators.nullValidator],
      farver : [],

      placering: [],
      uge: [],
      aar: [],
      bemaerkning: [],
      kommentar: [],
      sammeForskelligt: [],
      dpklouer: []
    });


    this.ms.getMovePaper().subscribe(value => {
      this.mps.getMediePlanAvis(value.bladid, value.year, 1 ).subscribe( value1 => {
        if (this.grid.data !== null) {
          this.grid.addRow(value1[0]);
        } else {
          this.grid.data = value1;
        }
        if (this.grid.columns.findIndex(value2 => value2.header === 'FarvePris') > 0) {
          this.setTotalFarvePris();
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
  this.populateColors();
  }

  ngOnInit() {

  }

  erOpret() {
this.isOpretVisable = true;
    this.isMiddleDivVisible = false;
  }

  erBooking() {
    this.isOpretVisable = false;
   this.isMiddleDivVisible = true;

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



  public opretMediePlan() {
    const samletPris = this.calculateTotalPrice();
      this.diaLog.open(GemMedieplanDialogComponent, { width: '20%', height: '15%'}).afterClosed().subscribe(value => {

        this.mss.createMediePLan( {
          BemærkningTilBlade: '',
          BilagsBladeATT: '',
          BilagsBladeTil: 0,
          BilagsBladeTilAdresse: '',
          BilagsBladeTilNavn: '',
          BilagsBladeTilPostNr: 0,
          BrugMaterialeFraUge: 0,
          Fakturering: 0,
          FællesBureauOrdreNr: '',
          IndrykningsUge: 0,
          InfoGodt: false,
          KonsulentCode: '',
          Kontaktperson: '',
          KontaktpersonTilhører: 0,
          KunForhandlerBundForskellig: false,
          MaterialeFølgerFra: 0,
          MaterialeFølgerFraLeverandør: '',
          RekvisitionsNr: '',
          RettelserEfterAnnoncekontrol: false,
          SamletPris:  samletPris,
          SammeBureauOrdreNr: false,
          SammeMateriale: false,
          SikkerhedsGodt: false,
          Status: 0,
          MedieplanNr: this.mediePlaId, Version: 1, AnnoncørNo_ : this.form.controls.annoncor.value,
          BureauNo_ : this.form.controls.bureau.value, Format1: Number(this.form.controls.format1.value),
          Format2: Number(this.form.controls.format2.value), AntalFarver: this.form.controls.farver.value, DPKulørID: 0, PlaceringID:
          this.form.controls.placering.value, OprettetDato: new Date().toDateString() ,
          OrdreDato: new Date().toDateString() , IndrykningsÅr:
            Number(this.form.controls.aar.value), BemærkningTilAnnoncør: this.form.controls.bemaerkning.value,
          Beskrivelse: value.beskrivelse, Overskrift: value.overskrift, Document_Type: value.type} ).subscribe(value2 => {
          this.opretMediePlanLinjer();
        }, error => {}, () => {

        });
    }, error => {

    }, () => {

      });



  }

  public opretMediePlanLinjer() {
    let i = 0;
    const mplArray: MedieplanLinjer[] = [];
    this.grid.data.forEach(value => {
      console.log('grid data');
     const mpl: MedieplanLinjer = {
       Bemaerkning: '',
       BureauOrdreNr: '',
       ErWeekendGruppe: false,
       FarveMax: 0,
       FarveMin: 0,
       FarvePris: 0,
       FarveRabat: 0,
       FarveTillaeg: 0,
       FarveTotal: 0,
       MaaGiveMaterialeGodtgoerelse: false,
       MaaGiveMmRabat: false,
       ManueltAendret: false,
       MaterialeGodtgoerelsePris: 0,
       MaterialeNr:  this.mediePlaId.toString(),
       MedIGrupper: '',
       MedieplanNr: this.mediePlaId,
       MiljoeTillaeg: 0,
       Mm: 0,
       MmPris: 0,
       MmRabat: 0,
       MmTotal: 0,
       NormalMmPris: 0,
       PrisLaast: false,
       RabatGruppe: '',
       SendeGruppe: '',
       SkalGiveMaterialeGodtgoerelse: false,
       Total: 0,
       TotalInclTillaeg: 0,
       TotalPris: 0,
       UgeavisID: value.BladID,
       Version: 1,
       WebtillaegFaktureresHer: false

     };

     mplArray.push(mpl);
    });
    this.mpj.CreateMediePlanLinje(mplArray, this.grid.data.length, i).subscribe(value1 => {
      console.log(value1);
      i ++;
    }, error => {   console.log(error); }, () => {

    });
  }
  public exportButtonHandler() {
      this.excelExportService.export(this.grid, new IgxExcelExporterOptions('ExportFileFromGrid'));
    }


    public openDaekningsKortDialog() {
      this.diaLog.open(DeakningKortDialogComponent, {width: '50%', height: '70%'} );
    }

    public totalSum() {
    const cell: IgxGridCellComponent  = this.grid.selectedCells[0];

    if (cell.column.header === 'mmRabat') {
      console.log('mmRabat');
    }
    const editValue = cell.editValue;

console.log('row id ' + cell);

    }
    public totalRabat() {
    const cell: IgxGridCellComponent =  this.grid.selectedCells[0];
    const  editValue: number = cell.editValue;

    this.grid.updateCell(editValue * Number(this.form.controls.format1.value).valueOf(), cell.rowIndex, 'mmTotal');

    }


    setTotalFarvePris() {
        this.grid.data.forEach(value => {
          const rabat = value.rabat;
          value.TotalFarvePris = value.FarvePris * (Number(this.form.controls.format1.value).valueOf() *
            Number(this.form.controls.format2.value).valueOf());
        });
    }


    public  replace(value) {
    let  newString = '';
    if (typeof  value === 'string') {
       newString = value.toString().replace('ae', '').replace('oe', 'ø');
    }
return newString;
  }

  private populateColors() {
    this.dpkuls.getDpKuloer().subscribe(value => {
      this.kuloer = value;
    });
  }
  private createColumns(data: MediePlanAvisModel) {
    data = null;
      this.columns.push({field: 'Adresse', header: 'Adresse' , ediable: false, hidden: true,
        groupable: true, hasSummery: false, moveable: true});
      this.columns.push({field: 'Adresse2', header: 'Adresse2', ediable: false, hidden: true,
        groupable: true,  hasSummery: false,  moveable: true});
      this.columns.push({field: 'AnnonceEmail', header: 'Annonce Email', ediable: false, hidden: true, groupable: true
        , hasSummery: false, moveable: true});
      this.columns.push({field: 'AnnonceKontrolEmail' , header: 'AnnonceKontrol Email', ediable: false, hidden: true, groupable: true ,
        hasSummery: false, moveable: true});
      this.columns.push({field: 'Betegnelse', header: 'Betegenlse' , ediable: false, hidden: true, groupable: true ,
        hasSummery: false, moveable: true});
      this.columns.push({field: 'BilagsbladeEmail', header: 'Bilagsblad email', ediable: false, hidden: true, groupable: true,
        hasSummery: false, moveable: true} );
      this.columns.push({field: 'BladID', header: 'Blad ID', ediable: false, hidden: false,
        groupable: true, hasSummery: false, moveable: true});
      this.columns.push({field: 'BogholderiEmails', header: 'Bogholder Emails', ediable: false, hidden: true, groupable: true,
        hasSummery: false, moveable: true});
      this.columns.push({field: 'CVR', header: 'CvR', ediable: false, hidden: true, groupable: true, hasSummery: false, moveable: true});
      this.columns.push({field: 'DagNavn', header: 'Dag navn', ediable: false, hidden: true,
        groupable: true, hasSummery: false, moveable: true});
      this.columns.push({field: 'DiMPDelOmrådeKode' , header: 'Delmråde kode', ediable: false, hidden: true, groupable: true,
        hasSummery: false, moveable: true});
      this.columns.push({field: 'DækningsGrad', header: 'Dækningsgrad', ediable: false, hidden: true,
        groupable: true, hasSummery: false, moveable: true});
      this.columns.push({field: 'Emails', header: 'Emails', ediable: false, hidden: true,
        groupable: true, hasSummery: false, moveable: true});
      this.columns.push({field: 'DækningsGrad', header: 'Dækningsgrad', ediable: false, hidden: true,
        groupable: true, hasSummery: false, moveable: true});
      this.columns.push({field: 'Ejerforhold', header: 'Ejerforhold', ediable: false, hidden: true,
        groupable: true, hasSummery: false, moveable: true});
      this.columns.push({field: 'FakturaGruppeID', header: 'Faktura Gruppe id', ediable: false, hidden: true, groupable: true,
        hasSummery: false, moveable: true});
      this.columns.push({field:  'Farve4Max', header: '4 Farve max', ediable: false, hidden: true,
        groupable: true, hasSummery: false, moveable: true});
      this.columns.push({field: 'Farve4Min', header: '4 Farve min', ediable: false, hidden: true,
        groupable: true, hasSummery: false, moveable: true});
     // this.columns.push({field: 'Farve4Pris', header: '4 Farve pris', ediable: false, hidden: true, groupable: true, hasSummery: false});
      this.columns.push({field: 'FarveMax', header: 'Farve max', ediable: true, hidden: true,
        groupable: true, hasSummery: false, moveable: true});
      this.columns.push({field: 'FarveMin' , header: 'Farve min', ediable: true, hidden: true,
        groupable: true, hasSummery: false, moveable: true});
   //   this.columns.push({field: 'FarvePris' , header: 'Farve pris', ediable: false, hidden: true, groupable: true, hasSummery: false});
      this.columns.push({field: 'Fax', header: 'Faz', ediable: false, hidden: true, groupable: true, hasSummery: false, moveable: true});
      this.columns.push({field: 'Format', header: 'Format', ediable: false, hidden: true,
        groupable: true, hasSummery: false, moveable: true});
    this.columns.push({field:   'FormatFra', header: 'Format fra', ediable: false, hidden: true,
      groupable: true, hasSummery: false, moveable: true});
    this.columns.push({field:  'FormatTil', header: 'Format til', ediable: false, hidden: true,
      groupable: true, hasSummery: false, moveable: true});
    this.columns.push({field:  'mmPris', header: 'mmPris', ediable: true, hidden: true,
      groupable: true, hasSummery: false, moveable: true});
    this.columns.push({field:  'totalPris', header: 'Total pris' , ediable: true, hidden: false, groupable: true, hasSummery: true,
      type: 'number', moveable: true});
    this.columns.push({field:  'bemækningtilAvis', header: 'bemærning til avis', ediable: true, hidden: true,
      groupable: true, type: 'string' ,
      hasSummery: false, moveable: true});
this.columns.push({field:  'ErWeekendGruppe' , header: 'WeekendGruppe', ediable: false,
  hidden: true, groupable: true , hasSummery: false, moveable: true});
this.columns.push({field: 'Navn', header: 'Navn', ediable: false, hidden: false,
  groupable: true, hasSummery: false, type: 'string', moveable: true});
  }



  visOneKuloer() {
    this.erDetKuloer1 = true;
    this.columns.push({field: 'FarvePris', header: 'Farve 1', ediable: true, groupable: true});
    this.addTotalPriceColumn();
    const index = this.columns.findIndex( x => x.field === 'Farve4Pris');
  if (index > -1) {
   this.columns.splice(index, 1);

  }
  this.setTotalFarvePris();
    }

  vis4Farve() {
  this.skujlOpret1Kuloer();
  this.columns.push({field: 'Farve4Pris', header: '4 Farve', ediable: true, groupable: true,  type: 'number'});
this.addTotalPriceColumn();
const index = this.columns.findIndex( x => x.field === 'FarvePris');
console.log(index);
if (index > -1 ) {
  this.columns.splice(index, 1);
}
  }
 addTotalPriceColumn() {
   const totalIndex = this.columns.findIndex(value => value.field === 'TotalFarvePris');
   const totolmmRabat = this.columns.findIndex(value =>  value.field === 'mmRabat');
   if (totalIndex < 0 && totolmmRabat < 0) {
     this.columns.push({
       field: 'TotalFarvePris',
       header: 'Total FarvePris',
       ediable: true,
       groupable: true,
       hasSummery: true,
       type: 'number'
     });

     this.columns.push({field: 'mmRabat', header: 'mmRabat', moveable: true, type: 'number', groupable: false, ediable: true, hasSummery: true});
   }
 }
  openSendTilBookingDialog() {
    this.diaLog.open(TilBookingDialogComponent, {width: '25%', height: '75%'}).afterClosed().subscribe(value => {

    });
  }

  skujlOpret1Kuloer() {
    this.erDetKuloer1 = false;
  }


  private GetLatestMediePlanNr() {
    if (this.opret === true) {
      this.mprs.CreateMediePlanLinker({
        AktivVersion: 1,
        AnvendtMiljoeTillaeg: 0,
        AnvendtPrisberegningVersion: 0,
        BrugtGruppeVersion: 0,
        FakturaBemaerkning1: '',
        FakturaBemaerkning2: '',
        FakturaBemaerkning3: '',
        Kommentar: '',
        MaterialeModtaget: false,
        OverførtFraPrisforespoergsel: false,
        Status: 1,
        SupportBilagVedlagt: false,
        SupportBilagVist: false
      }).subscribe(value => {
        this.mediePlaId = value.item2;
      });
    }
    this.erOpret();
  }

  private setGridData(data) {
    this.grid2.data = data[0].medieplannlinjer;
  }

  private  calculateTotalPrice(): number {
    let totalPrice  = 0;
    this.grid.data.forEach(value => {
      totalPrice += totalPrice + value.totalPris;
    });
    return  totalPrice;
  }
}

