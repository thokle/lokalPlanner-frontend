import {Routes} from '@angular/router';
import {StamBladComponent} from './stam-blad/stam-blad.component';
import {IndexComponent} from './index/index.component';
import {IsUSerGuard} from './is-user.guard';
import {MediaPlanComponent} from './media-plan/media-plan.component';
import {RegisteruserComponent} from './registeruser/registeruser.component';
import {LoginGuard} from './login.guard';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RedirectComponent} from './redirect/redirect.component';

export const routes: Routes = [
  {path: '', component: RedirectComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard], children: [
      {path: 'stamblad', component: StamBladComponent},
      {path: 'opret', component: RegisteruserComponent}
    ]},
  {path: 'opret', component: RegisteruserComponent},
  {path: 'stamblad', component: StamBladComponent}
  ];



