
import { AppComponent } from './app.component';
import { StamBladComponent } from './stam-blad/stam-blad.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { IndexComponent } from './index/index.component';
import { MatFormFieldModule, MatIconModule, MatListModule, MatSidenavModule, MatTabsModule, MatToolbarModule, MatInputModule,
  MatOptionModule,
  MatSelectModule, MatGridListModule,
  MatButtonModule, MatMenuModule, MatRadioModule, MatChipsModule, MatExpansionModule, MatTableModule, MatDialogModule,
  MatDialog, MatDialogRef,
  MatSnackBarModule, MatCheckboxModule,
  MatAutocompleteModule, MatCardModule, MatDrawerContent, MatSortModule } from '@angular/material';

import { AdresseStambladComponent } from './adresse-stamblad/adresse-stamblad.component';
import { StamdataService } from './services/stamdata.service';
import { StamBladOverSigtComponent } from './stam-blad-over-sigt/stam-blad-over-sigt.component';
import { StambladPaginatorComponent } from './stamblad-paginator/stamblad-paginator.component';
import { StamBladObserver } from './stam-blad-observer';

import { PostNummerService } from './services/post-nummer.service';
import { DateSupplierService } from './services/date-supplier.service';

import { ByComponent } from './by/by.component';
import { StambladkontaktDialogComponent } from './stambladkontakt-dialog/stambladkontakt-dialog.component';
import { LoginComponent } from './login/login.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { RegisteruserService } from './services/registeruser.service';
import { BogholderiComponent } from './bogholderi/bogholderi.component';
import { PostService } from './services/post.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PriceAskingDialogComponent } from './price-asking-dialog/price-asking-dialog.component';
import { PriceAskingComponent } from './price-asking/price-asking.component';
import { PriceAskingService } from './services/price-asking.service';

import { RegionService } from './services/region.service';
import { DelomraadeService } from './services/delomraade.service';
import { DagePipe } from './pipies/dage.pipe';
import { DelomraadePipe } from './pipies/delomraade.pipe';
import { RegionPipe } from './pipies/region.pipe';
import { BynavnPipe } from './pipies/bynavn.pipe';
import { GeoPipe } from './pipies/geo.pipe';

import { YearPipe } from './pipies/year.pipe';
import { BladDaekningComponent } from './blad-daekning/blad-daekning.component';
import { StamBladKontaktPersonService } from './services/stam-blad-kontakt-person.service';
import { BladdaekningService } from './services/bladdaekning.service';
import { EditBladdaekningComponent } from './blad-daekning/edit-bladdaekning/edit-bladdaekning.component';
import { EjerforholdComponent } from './ejerforhold/ejerforhold.component';
import { ExcelexportService } from './services/excelexport.service';
import { EjerforholdTableComponent } from './ejerforhold/ejerforhold-table/ejerforhold-table.component';
import { EjerforholdService } from './services/ejerforhold.service';
import { RedirectComponent } from './redirect/redirect.component';
import { VisKontakterComponent } from './vis-kontakter/vis-kontakter.component';
import { CreatePriceComponent } from './create-price/create-price.component';
import { PriceBuilderComponent } from './price-builder/price-builder.component';
import { PriceTabComponent } from './price-tab/price-tab.component';
import { MonthPipe } from './pipies/month.pipe';

import { BladkommentarComponent } from './bladkommentar/bladkommentar.component';
import { KommentarService } from './services/kommentar.service';
import { PriceWeekComponent } from './price-week/price-week.component';
import { StambladkontaktTabelComponent } from './stambladkontakt-tabel/stambladkontakt-tabel.component';
import { PlaceringServiceService } from './services/placering-service.service';

import { PricetableComponent } from './pricetable/pricetable.component';
import { PriceDialogComponent } from './price-dialog/price-dialog.component';
import { PriceBladAarService } from './services/price-blad-aar.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { YeardialogComponent } from './yeardialog/yeardialog.component';

import { UdsendingkontaktertableComponent } from './udsendingkontaktertable/udsendingkontaktertable.component';
import { UdsendingkontakterDialogComponent } from './udsendingkontakter-dialog/udsendingkontakter-dialog.component';
import { UdsendingkontakterService } from './services/udsendingkontakter.service';
import { UdsendingKontaktTyperService } from './services/udsending-kontakt-typer.service';

import { PriceWeeTypeDialogComponent } from './price-wee-type-dialog/price-wee-type-dialog.component';

import { BladtilLaegstypeComponent } from './bladtil-laegstype/bladtil-laegstype.component';
import { BladtilLaegsComponent } from './bladtil-laegs/bladtil-laegs.component';
import { BladtilLaegsDialogComponent } from './bladtil-laegs-dialog/bladtil-laegs-dialog.component';
import { BladtillaegsType } from './models/bladtillaegs-type';
import { PlaceringdialogComponent } from './placeringdialog/placeringdialog.component';
import { RabatComponent } from './rabat/rabat.component';
import { AktiveaviserService } from './services/aktiveaviser.service';
import { KontaktTitlerService } from './services/kontakt-titler.service';
import { PriceListPositionDialogComponent } from './price-list-position-dialog/price-list-position-dialog.component';
import { AktiveaviserColumnDialogComponent } from './aktiveaviser-column-dialog/aktiveaviser-column-dialog.component';
import { MedieplanToolbarComponent } from './medieplan-toolbar/medieplan-toolbar.component';

import { FindMedieplanToolbarComponent } from './find-medieplan-toolbar/find-medieplan-toolbar.component';

import { DashBoardMaterialComponent } from './dash-board-material/dash-board-material.component';
import { FindMedieplanComponent } from './find-medieplan/find-medieplan.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MediePlanAvisService } from './services/medie-plan-avis.service';
import { BureauService } from './services/bureau.service';
import { AnnonceService } from './services/annonce.service';
import { JsonUtilService } from './services/json-util.service';
import { ArrayUtilService } from './services/array-util.service';
import { LeftAvisGridComponent } from './left-avis-grid/left-avis-grid.component';

import {IgxExcelExporterService, IgxGridModule, IgxInputGroupModule, IgxRippleModule} from 'igniteui-angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MovePaperService} from './services/move-paper.service';
import { MedieplanComponent } from './medieplan/medieplan.component';
import { GemMedieplanDialogComponent } from './gem-medieplan-dialog/gem-medieplan-dialog.component';
import { TilBookingDialogComponent } from './til-booking-dialog/til-booking-dialog.component';
import { DeakningKortDialogComponent } from './deakning-kort-dialog/deakning-kort-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    StamBladComponent,
    IndexComponent,

    AdresseStambladComponent,
    StamBladOverSigtComponent,
    StambladPaginatorComponent,
    ByComponent,
    StambladkontaktDialogComponent,
    LoginComponent,
    RegisteruserComponent,
    BogholderiComponent,
    DashboardComponent,
    PriceAskingDialogComponent,
    PriceAskingComponent,

    DagePipe,
    DelomraadePipe,
    RegionPipe,
    BynavnPipe,
    GeoPipe,
    YearPipe,
    BladDaekningComponent,
    EditBladdaekningComponent,
    EjerforholdComponent,
    EjerforholdTableComponent,
    RedirectComponent,
    VisKontakterComponent,
    CreatePriceComponent,
    PriceBuilderComponent,
    PriceTabComponent,
    MonthPipe,

    BladkommentarComponent,

    PriceWeekComponent,

    StambladkontaktTabelComponent,

    PricetableComponent,

    PriceDialogComponent,

    YeardialogComponent,

    UdsendingkontakterDialogComponent,

    UdsendingkontaktertableComponent,



    PriceWeeTypeDialogComponent,

    BladtilLaegstypeComponent,

    BladtilLaegsComponent,

    BladtilLaegsDialogComponent,

    PlaceringdialogComponent,

    RabatComponent,

    PriceListPositionDialogComponent,

    AktiveaviserColumnDialogComponent,

    MedieplanToolbarComponent,



    FindMedieplanToolbarComponent,



    DashBoardMaterialComponent,

    FindMedieplanComponent,


    LeftAvisGridComponent,


    MedieplanComponent,


    GemMedieplanDialogComponent,


    TilBookingDialogComponent,


    DeakningKortDialogComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatRadioModule,
    MatChipsModule,
    MatTableModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatExpansionModule,

    AngularFontAwesomeModule,

    MatAutocompleteModule,
    MatCardModule,
    DragDropModule,
    MatSortModule,
    IgxGridModule,
    IgxRippleModule,
    IgxInputGroupModule

  ],
  providers: [StamdataService, StamBladObserver, PostNummerService, DateSupplierService, RegisteruserService,
    PostService, PriceAskingService, RegionService, DelomraadeService, StamBladKontaktPersonService, BladdaekningService,
    ExcelexportService, AktiveaviserService, JsonUtilService,
    EjerforholdService, KommentarService, PlaceringServiceService, PlaceringServiceService, PriceBladAarService,
    BureauService, ArrayUtilService,
    AnnonceService,
    UdsendingkontakterService, UdsendingKontaktTyperService, KontaktTitlerService, MediePlanAvisService, MovePaperService,
    IgxExcelExporterService],
  entryComponents: [StambladkontaktDialogComponent, PriceAskingDialogComponent, EditBladdaekningComponent, PriceDialogComponent,
    UdsendingkontakterDialogComponent, PriceWeeTypeDialogComponent, BladtilLaegstypeComponent, BladtilLaegsDialogComponent,
    PlaceringdialogComponent, BladkommentarComponent, PriceListPositionDialogComponent, AktiveaviserColumnDialogComponent,
    GemMedieplanDialogComponent, DeakningKortDialogComponent
  ],

  bootstrap: [AppComponent]

})
export class AppModule {
}
