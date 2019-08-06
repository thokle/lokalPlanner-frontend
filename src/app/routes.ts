import {Routes} from '@angular/router';
import {StamBladComponent} from './stam-blad/stam-blad.component';
import {IndexComponent} from './index/index.component';
import {IsUSerGuard} from './is-user.guard';
import {RegisteruserComponent} from './registeruser/registeruser.component';
import {LoginGuard} from './login.guard';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RedirectComponent} from './redirect/redirect.component';
import {CreatePriceComponent} from './create-price/create-price.component';
import {RabatComponent} from './rabat/rabat.component';
import {MedieplanComponent} from './medieplan/medieplan.component';
import {NewDashboardComponent} from './new-dashboard/new-dashboard.component';
import {FindMedieplanComponent} from './find-medieplan/find-medieplan.component';

export const routes: Routes = [
  {path: '', component: RedirectComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard], children: [
      {path: 'stamblad', component: StamBladComponent},
      {path: 'opret', component: RegisteruserComponent},
      {path: 'indhentPriser', component: CreatePriceComponent},
      {path: 'rabat',  component: RabatComponent},
      {path: 'opret_medieplan', component: MedieplanComponent },
      {path: 'find_medieplan' , component: FindMedieplanComponent}
    ]},
  {path: 'opret', component: RegisteruserComponent},
  {path: 'stamblad', component: StamBladComponent}
  ];



