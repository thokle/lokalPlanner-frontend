import {Routes} from '@angular/router';
import {StamBladComponent} from './stam-blad/stam-blad.component';
import {IndexComponent} from './index/index.component';
import {IsUSerGuard} from './is-user.guard';

export const routes: Routes = [
  {path: '' , component: IndexComponent},
  {path: 'stamblad', component: StamBladComponent}

]



