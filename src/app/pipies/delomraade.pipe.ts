import { Pipe, PipeTransform } from '@angular/core';
import {DelomraadeService} from '../services/delomraade.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Pipe({
  name: 'delomraade'
})
export class DelomraadePipe implements PipeTransform {

  baseurl = environment.url + environment.port;
  constructor(private  http: HttpClient, private ds: DelomraadeService) {

  }
  transform(value: any, args?: any): any {
     switch (value) {
       case 0: {
         return 'Ingen Delområde';
       }
       case 1: {
         return  'HT Indre';
       }
       case 2: {
          return   'HT Ydre';
       }
       case 3: {
         return  'HT Udkant';
       }
       case 4: {
         return  'HT Nord';
       }
       case 5: {
        return  'HT Nord vest';
       }
       case 6: {
         return 'HT Vest';
       }
       case 7: {
         return  'Sjælland Vest';
       }
       case 8: {
          return   'Sjælland Syd';
       }
       case 9: {
         return  'Sjælland Øerne';
       }
       case 10: {
         return 'Sjælland Bornholm';
       }
       case 11: {
         return 'Jylland Nord';
       }
       case 12: {
        return   'Konkurenternes Del';
       }
       case 13: {
         return  'Jylland Syd';
       }
       case 14: {
         return 'Jylland Vest';
       }
       case 15: {
         return 'Fyn';
       }
       case  16: {
         return  'Jylland Midt';
       }
     }


  }

}

