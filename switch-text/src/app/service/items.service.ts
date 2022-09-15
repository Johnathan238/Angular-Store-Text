import { EventEmitter, Injectable } from '@angular/core';

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

  ideasUpdated = new EventEmitter<string>()

  constructor() { }

  addIdea(item: string){
    this.ideas.push({item: item})
  }

  updateIdea(id: number, item: string){
    this.ideas[id].item = item
  }
}
