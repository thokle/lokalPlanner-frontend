import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StamBladComponent } from './stam-blad/stam-blad.component';
import {RouterModule, RouterOutlet} from '@angular/router';
import {routes} from './routes';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationDriver} from '@angular/animations/browser/src/render/animation_driver';
import { IndexComponent } from './index/index.component';

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
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
