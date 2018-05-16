import { Component, OnInit } from '@angular/core';
import { CriService } from '../../cri.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _criService:CriService
   ) {}
  crimes:any;
  
  startDate:any;
  endDate:any;  
  private formattedStartDate: string;
  private formattedEndDate: string;
  formattedDay: string;
  formattedMonth: string;
  
  ngOnInit() {
    this.getAllCrimes();
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
    this.getCrimesByDatePeriod(this.formattedStartDate,this.formattedEndDate);
  }
  
  getAllCrimes(){
    this._criService
        .getAllCrimes()
        .subscribe(crimes => {
           this.crimes=crimes;
        } )
  }

  getCrimesByDatePeriod(sd, ed){    
     this._criService
        .getCrimesByDate(sd, ed)
        .subscribe(crimes => {
          this.crimes=crimes;
          console.log("we got",crimes)
      } )
  }

}