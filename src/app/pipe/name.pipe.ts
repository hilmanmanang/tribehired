import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NamePipe implements PipeTransform {

  transform(commentsData: any[], nameFilter: any) {
    if (!commentsData || !nameFilter) {
      return commentsData;
    }
    return commentsData.filter(char =>
      char.name.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1); ;
  }

}
