import { Component, OnInit } from '@angular/core';
import { CriService } from '../../cri.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-top-teams-for-crime',
  templateUrl: './top-teams-for-crime.component.html',
  styleUrls: ['./top-teams-for-crime.component.scss']
})
export class TopTeamsForCrimeComponent implements OnInit {

  constructor(
    private _criService:CriService,
    private route: ActivatedRoute
  ) { }
  teams:any;

  startDate:any;
  endDate:any;  
  private formattedStartDate: string;
  private formattedEndDate: string;
  formattedDay: string;
  formattedMonth: string;

  ngOnInit() {
    this.getTeamsWithCrime();
  }

  fetchData() {

    /*formatting start date*/
    this.formattedDay = this.startDate.day;
    this.formattedMonth = this.startDate.month;
    var n = this.formattedDay.toString.length;
    if(n==1)
    this.formattedDay = ("0" + this.startDate.day).slice(-2);
    n = this.formattedMonth.toString.length;
    if(n==1)
    this.formattedMonth = ("0" + this.startDate.month).slice(-2);
    
    this.formattedStartDate = this.startDate.year+"-"+this.formattedMonth+"-"+this.formattedDay;
    //console.log(this.formattedStartDate);
    
    /*formatting end date*/
    this.formattedDay = this.endDate.day;
    this.formattedMonth = this.endDate.month;
    n = this.formattedDay.toString.length;
    if(n==1)
    this.formattedDay = ("0" + this.endDate.day).slice(-2);
    n = this.formattedMonth.toString.length;
    if(n==1)
    this.formattedMonth = ("0" + this.endDate.month).slice(-2);
    
    this.formattedEndDate = this.endDate.year+"-"+this.formattedMonth+"-"+this.formattedDay;
    //console.log(this.formattedEndDate);
    this.getTeamsByDatePeriod(this.formattedStartDate,this.formattedEndDate);
  }

  getTeamsWithCrime(){
     let id = this.route.snapshot.params['id'];     
     this._criService
        .getTopTeamsForCrime(id)
        .subscribe(teams => {
          this.teams=teams;
          console.log(teams)
      } )
  }

  getTeamsByDatePeriod(sd, ed){
    let id = this.route.snapshot.params['id'];
    this._criService
       .getTopTeamsForCrimeByDate(id, sd, ed)
       .subscribe(teams => {
         this.teams=teams;
         console.log("we got",teams)
     } )
 }

}