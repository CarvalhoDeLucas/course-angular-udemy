import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    'X Bacon',
    'Feijão',
    'Ovo'
  ];

  constructor() { }

  public foodList(): Array<string> {
    return this.list;
  }

  public foodListAdd(value: string) {
    return this.list.push(value);
  }

}
