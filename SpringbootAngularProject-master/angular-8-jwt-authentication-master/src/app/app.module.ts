import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateMatchComponent } from './create-match/create-match.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { UpdateMatchComponent } from './update-match/update-match.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { EquipeDetailsComponent } from './equipe-details/equipe-details.component';
import { EquipeListComponent } from './equipe-list/equipe-list.component';
import { CreateEquipeComponent } from './create-equipe/create-equipe.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    CreateMatchComponent,
    MatchListComponent,
    MatchDetailsComponent,
    UpdateMatchComponent,
    UpdateEquipeComponent,
    EquipeDetailsComponent,
    EquipeListComponent,
    CreateEquipeComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
