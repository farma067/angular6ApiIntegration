import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'players'
})
export class PlayersPipe implements PipeTransform {

  transform(players: any, term: any): any {
   //check if search term is undefined
   if (term === undefined) return players;
   //return updated teamName array
   return players.filter(function(player){
     return player.Name.toLowerCase().includes(term.toLowerCase());
   })
  }

}
