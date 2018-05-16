import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './cri/home/home.component';

import { CriService } from './cri.service';
import { TopPlayersForCrimeComponent } from './cri/top-players-for-crime/top-players-for-crime.component';
import { TopTeamsForCrimeComponent } from './cri/top-teams-for-crime/top-teams-for-crime.component';
import { FilterPipe } from './filter.pipe';
import { CrimeTimeLineComponent } from './cri/crime-time-line/crime-time-line.component';
import { DatePipe } from '@angular/common';
import { NavbarComponent } from './cri/navbar/navbar.component';
import { CategoryPipe } from './category.pipe';
import { PlayersPipe } from './players.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopPlayersForCrimeComponent,
    TopTeamsForCrimeComponent,
    FilterPipe,
    CrimeTimeLineComponent,
    NavbarComponent,
    CategoryPipe,
    PlayersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChartModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [CriService],
  bootstrap: [AppComponent]
})
export class AppModule { }