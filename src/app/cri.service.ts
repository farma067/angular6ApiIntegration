import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CriService {
  
  constructor(private _http:HttpClient) { }
  
  getAllCrimes(){
    let allCrimesDataUrl = 'http://nflarrest.com/api/v1/crime';
    return this._http.get(allCrimesDataUrl);
  }

  getCrimesByDate(sd,ed){
    console.log(sd);
    console.log(ed);
    let dataUrl = 'http://nflarrest.com/api/v1/crime/?start_date='+sd+'&end_date='+ed+'';
    return this._http.get(dataUrl);  
  }
  getTopPlayersForCrime(id){
    let playersDataUrl = 'http://nflarrest.com/api/v1/crime/topPlayers/'+id;
    return this._http.get(playersDataUrl);
  }

  getTopPlayersForCrimeByDate(id,sd,ed) {
    let playersDataUrl = 'http://nflarrest.com/api/v1/crime/topPlayers/'+id+'?start_date='+sd+'&end_date='+ed+'';
    return this._http.get(playersDataUrl);
  }

  getTopTeamsForCrime(id){
    let teamsDataUrl = 'http://nflarrest.com/api/v1/crime/topTeams/'+id;
    return this._http.get(teamsDataUrl);
  }
  
  getTopTeamsForCrimeByDate(id,sd,ed){
    let teamsDataUrl = 'http://nflarrest.com/api/v1/crime/topTeams/'+id+'?start_date='+sd+'&end_date='+ed+'';
    return this._http.get(teamsDataUrl);
  }

  getCrimeTimeLine(id){
    let crimeTimeLineDataUrl = 'http://nflarrest.com/api/v1/crime/timeline/'+id;
    return this._http.get(crimeTimeLineDataUrl);
  }
}