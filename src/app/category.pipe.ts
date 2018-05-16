import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(category: any, term: any): any {
    //check if search term is undefined
    if (term === undefined) return category;
    //return updated teamName array
    return category.filter(function(cat){
      return cat.Category.toLowerCase().includes(term.toLowerCase());
    })
  }

}