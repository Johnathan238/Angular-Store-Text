import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  ideas = [
    {
      item: 'Find bug'
    },
    {
      item: 'test'
    },
    {
      item: 'meeting'
    }
  ]

  constructor() { }

  addIdea(item: String){
    this.ideas.push({item: item})
  }
}
