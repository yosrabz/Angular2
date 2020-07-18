import { MatchDetailsComponent } from './match-details/match-details.component';
import { CreateMatchComponent } from './create-match/create-match.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchListComponent } from './match-list/match-list.component';
import { UpdateMatchComponent } from './update-match/update-match.component';
import { EquipeListComponent } from './equipe-list/equipe-list.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { EquipeDetailsComponent } from './equipe-details/equipe-details.component';
import { CreateEquipeComponent } from './create-equipe/create-equipe.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'matchs', component: MatchListComponent },
  { path: 'add', component: CreateMatchComponent },
  { path: 'update/:id', component: UpdateMatchComponent },
  { path: 'details/:id', component: MatchDetailsComponent },
  { path: 'equipes', component: EquipeListComponent },
  { path: 'add2', component: CreateEquipeComponent },
  { path: 'update2/:id', component: UpdateEquipeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'details2/:id', component: EquipeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
