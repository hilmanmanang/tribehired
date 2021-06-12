import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailFilter'
})
export class EmailPipe implements PipeTransform {

  transform(commentsData: any[], emailFilter: any) {
    if (!commentsData || !emailFilter) {
      return commentsData;
    }
    return commentsData.filter(char =>
      char.email.toLowerCase().indexOf(emailFilter.toLowerCase()) !== -1); ;
  }

}
