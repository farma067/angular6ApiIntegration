import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './cri/home/home.component';
import { TopPlayersForCrimeComponent } from './cri/top-players-for-crime/top-players-for-crime.component';
import { TopTeamsForCrimeComponent } from './cri/top-teams-for-crime/top-teams-for-crime.component';
import { CrimeTimeLineComponent } from './cri/crime-time-line/crime-time-line.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"tp/:id", component:TopPlayersForCrimeComponent},
  {path:"tt/:id", component:TopTeamsForCrimeComponent},
  {path:"ct/:id", component:CrimeTimeLineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
