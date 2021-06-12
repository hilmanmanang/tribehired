import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bodyFilter'
})
export class BodyPipe implements PipeTransform {

  transform(commentsData: any[], bodyFilter: any) {
    if (!commentsData || !bodyFilter) {
      return commentsData;
    }
    return commentsData.filter(char =>
      char.body.toLowerCase().indexOf(bodyFilter.toLowerCase()) !== -1); ;
  }

}
