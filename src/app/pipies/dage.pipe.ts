import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dage'
})
export class DagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 1: {
        return 'Mandag';
      }

    }
  }

}
