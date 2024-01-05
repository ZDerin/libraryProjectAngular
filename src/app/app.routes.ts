import { Routes } from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {StartseiteComponent} from "./startseite/startseite.component";
import {LogoutComponent} from "./logout/logout.component";
import {HauptseiteComponent} from "./hauptseite/hauptseite.component";
import {VerwaltelesewunschlisteComponent} from "./verwaltelesewunschliste/verwaltelesewunschliste.component";
import {AllebuecherComponent} from "./allebuecher/allebuecher.component";
import {StandorteComponent} from "./standorte/standorte.component";
import {FilteredStandorteComponent} from "./filtered-standorte/filtered-standorte.component";

export const routes: Routes = [
  {path: '' , component: StartseiteComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'log', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'home', component: HauptseiteComponent},
  {path: 'readingwishlist', component: VerwaltelesewunschlisteComponent},
  {path: 'allbooks', component: AllebuecherComponent},
  {path: 'location', component: FilteredStandorteComponent}
];
