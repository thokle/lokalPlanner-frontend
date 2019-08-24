import {Pipe, PipeTransform} from '@angular/core';
import {PostService} from '../services/post.service';

@Pipe({
  name: 'bynavn'
})
export class BynavnPipe implements PipeTransform {
 bynavn = '';

  constructor(private  by: PostService) {

  }

  transform(value: any, args?: any): any {


    if (value !== 0) {
      this.by.getByNavnByPostnr(value).subscribe(value1 => {
        return this.bynavn = value1[0].PostBy;
      });
    }
    return this.bynavn;
  }

}
