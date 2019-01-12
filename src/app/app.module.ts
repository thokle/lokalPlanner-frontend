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
  MatInputModule, MatOptionModule, MatSelectModule, MatGridListModule
} from '@angular/material';
import { MediaPlanComponent } from './media-plan/media-plan.component';
import {HttpClientModule} from '@angular/common/http';
import { AdresseStambladComponent } from './adresse-stamblad/adresse-stamblad.component';
import { StamdataService} from  'services/stamdata.service';
import { StamBladOverSigtComponent } from './stam-blad-over-sigt/stam-blad-over-sigt.component';



@NgModule({
  declarations: [
    AppComponent,
    StamBladComponent,
    IndexComponent,
    MediaPlanComponent,
    AdresseStambladComponent,
    StamBladOverSigtComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatInputModule,
    MatTabsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
