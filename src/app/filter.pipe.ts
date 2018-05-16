import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(teamName: any, term: any): any {
    //check if search term is undefined
    if (term === undefined) return teamName;
    //return updated teamName array
    return teamName.filter(function(team){
      return team.Team_name.toLowerCase().includes(term.toLowerCase());
    })
  }

}