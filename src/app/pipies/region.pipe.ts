import { Pipe, PipeTransform } from '@angular/core';
import {RegionService} from '../services/region.service';

@Pipe({
  name: 'region'
})
export class RegionPipe implements PipeTransform {

  constructor(private  rs: RegionService) {


  }

  transform(value: any, args?: any): any {
   switch (value) {
     case 0: {
       return 'Ingen region';
     }
     case 1: {
       return 'Hovedstaden';
     }
     case 2: {
       return  'Sjælland';
     }
     case 3: {
       return  'Nordjylland';
     }
     case  4: {
       return 'Midtjylland';
     }
     case 5: {
       return 'Syddanmark';
     }
   }
  }

}

