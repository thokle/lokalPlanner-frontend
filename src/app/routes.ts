import {Routes} from '@angular/router';
import {StamBladComponent} from './stam-blad/stam-blad.component';
import {IndexComponent} from './index/index.component';
import {IsUSerGuard} from './is-user.guard';
import {MediaPlanComponent} from './media-plan/media-plan.component';
import {RegisteruserComponent} from './registeruser/registeruser.component';
import {LoginGuard} from './login.guard';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
  {path: 'stamblad'  , canActivate: [LoginGuard] , component: StamBladComponent},
  {path: 'createUser', canActivate: [LoginGuard], component: RegisteruserComponent}
  ]



