import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StamBladComponent } from './stam-blad/stam-blad.component';
import {RouterModule, RouterOutlet} from '@angular/router';
import {routes} from './routes';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationDriver} from '@angular/animations/browser/src/render/animation_driver';
import { IndexComponent } from './index/index.component';
import {MatIconModule, MatListModule, MatSidenavModule, MatTabsModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    StamBladComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
