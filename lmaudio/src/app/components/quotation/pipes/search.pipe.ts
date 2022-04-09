import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const query = args[0];
    if (typeof query === 'undefined')return value;
    return value.filter((products)=>{
    return products.proName.toUpperCase().indexOf(query.toUpperCase())>-1
    })


  }

}
