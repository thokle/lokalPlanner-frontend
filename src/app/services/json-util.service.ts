import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonUtilService {

  constructor() { }

  public isJson(value: any): boolean {
    try {
      JSON.parse(value);

    } catch (e) {
      return  false;
    }
    return  true;
  }

}
