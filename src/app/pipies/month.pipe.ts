import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(value: any, args?: any): any {
     switch (value) {
       case 0: {
         return 'Januar';
       }
       case 1: {
         return 'Febuar';
       }
       case 2: {
         return  'Marts';
       }
       case 3: {
         return 'April';
       }
       case 4: {
         return 'Maj';
       }
       case 5: {
         return 'Juni';
       }
       case 6: {
         return 'Juli';
       }
       case 7: {
         return 'August';
       }
       case 8: {
         return 'September';
       }
       case  9: {
         return 'Oktober';
       }
       case 10: {
         return 'November';
       }
       case 11: {
         return 'December';
       }

     }
  }

}
