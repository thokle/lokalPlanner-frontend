import {Routes} from '@angular/router';
import {StamBladComponent} from './stam-blad/stam-blad.component';
import {IndexComponent} from './index/index.component';
import {IsUSerGuard} from './is-user.guard';
import {MediaPlanComponent} from './media-plan/media-plan.component';

export const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'stamblad', component: StamBladComponent},
  {path: 'medieplan', component: MediaPlanComponent},
  

];



