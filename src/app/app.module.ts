import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StamBladComponent } from './stam-blad/stam-blad.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { IndexComponent } from './index/index.component';
import {
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatGridListModule,
  MatButtonModule,
  MatMenuModule,
  MatRadioModule,
  MatChipsModule,
  MatTableModule, MatDialogModule, MatDialog, MatDialogRef, MatSnackBarModule, MatCheckboxModule
} from '@angular/material';
import { MediaPlanComponent } from './media-plan/media-plan.component';
import {HttpClientModule} from '@angular/common/http';
import { AdresseStambladComponent } from './adresse-stamblad/adresse-stamblad.component';
import { StamdataService } from './services/stamdata.service';
import { StamBladOverSigtComponent } from './stam-blad-over-sigt/stam-blad-over-sigt.component';
import { StambladPaginatorComponent } from './stamblad-paginator/stamblad-paginator.component';
import {StamBladObserver} from './stam-blad-observer';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostNummerService} from './services/post-nummer.service';
import {DateSupplierService} from './services/date-supplier.service';

import { ByComponent } from './by/by.component';
import { StambladkontaktDialogComponent } from './stambladkontakt-dialog/stambladkontakt-dialog.component';
import { LoginComponent } from './login/login.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import {RegisteruserService} from './services/registeruser.service';
import { BogholderiComponent } from './bogholderi/bogholderi.component';
import {PostService} from './services/post.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PriceAskingDialogComponent } from './price-asking-dialog/price-asking-dialog.component';
import { PriceAskingComponent } from './price-asking/price-asking.component';
import {PriceAskingService} from './services/price-asking.service';



@NgModule({
  declarations: [
    AppComponent,
    StamBladComponent,
    IndexComponent,
    MediaPlanComponent,
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
    MatCheckboxModule
  ],
  providers: [StamdataService, StamBladObserver, PostNummerService, DateSupplierService, RegisteruserService,
    PostService, PriceAskingService],
  entryComponents: [StambladkontaktDialogComponent, PriceAskingDialogComponent],

  bootstrap: [AppComponent]

})
export class AppModule { }
