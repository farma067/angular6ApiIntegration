import { Component, OnInit } from '@angular/core';
import { CriService } from '../../cri.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Chart, Highcharts } from 'angular-highcharts';

@Component({
  selector: 'app-crime-time-line',
  templateUrl: './crime-time-line.component.html',
  styleUrls: ['./crime-time-line.component.scss']
})
export class CrimeTimeLineComponent implements OnInit {

  constructor(
    private _criService:CriService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  timelines:any;
  

  ngOnInit() {
    this.getCrimeTimeLine();
  }  

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Line Represents Arrest Count'
    },
    credits: {
      enabled: false
    },
    series: [{
    }]
  });              

  getCrimeTimeLine(){
    var id = this.route.snapshot.params['id'];
    var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    
    this._criService
       .getCrimeTimeLine(id)
       .subscribe(timelines => {
         this.timelines=timelines;
         //let crimeTimelines = [];
           console.log(timelines);
           var arrestCount = [];
           var yearMonth = [];
           for(let _i = 0; _i < this.timelines.length; _i++){
                let month = this.timelines[_i].Month;
                let year = this.timelines[_i].Year;
                arrestCount.push(this.timelines[_i].arrest_count);
                
                /*Creating year Month variable*/
                let crimeYearMonth = new Date(year,--month);
                let crimeMonth = crimeYearMonth.getMonth();
                let crimeYear = crimeYearMonth.getFullYear();
                yearMonth.push(monthNames[crimeMonth]+" "+crimeYear);
          }
          
          //var b = arrestCount.split(',').map(Number);
          arrestCount =  arrestCount.map(Number);
          this.chart.options = {
            chart: {
                renderTo: 'container',
                type: 'line'
            },
            xAxis: {
              categories: yearMonth
            },
            series: [{
                name: 'Months and Years',
                data: arrestCount              
            }]            
         };
         
         console.log('chart', arrestCount)
     } )
 }

}