import {Pipe, PipeTransform} from '@angular/core';
import {PostService} from '../services/post.service';

@Pipe({
  name: 'bynavn'
})
export class BynavnPipe implements PipeTransform {


  constructor(private  by: PostService) {

  }

  transform(value: any, args?: any): any {
    this.by.getByNavnByPostnr(value).subscribe( value1 => {
      return value1[0].PostBy as string;
    });
    switch (value) {
      case 2620: {
        return 'Albertsludd';
      }
      case 5000: {
        return  'Assens';
      }
    }

  }

}
