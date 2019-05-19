import { Pipe, PipeTransform } from '@angular/core';
import {GeoService} from '../services/geo.service';

@Pipe({
  name: 'geo'
})
export class GeoPipe implements PipeTransform {
  constructor(private gs: GeoService) {
  }


  transform(value: any, args?: any): any {
    let navn = '';
    if (value !== null) {
      this.gs.GetGeoCode(value).subscribe(value1 => {
        navn = value1[0].GeoKodeNavn;
      });
      console.log('GeoPipe  ' + navn);
      return navn;
    }
  }

}
