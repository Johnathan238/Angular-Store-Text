import { EventEmitter, Injectable } from '@angular/core';
import { Store } from '../interfaces/interface';

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
    },
  ]

  store: Store = {
    development: [],
    testing: [],
    deployment: [],
  }



  ideasUpdated = new EventEmitter<string>()

  constructor() {
    console.log(this.ideasUpdated);
  }

  addIdea(item: string){
    this.ideas.push({item: item})
  }

  updateIdea(id: number, item: string){
    this.ideas[id].item = item
  }

  moveIdea(){
    this.ideas.push(this.store)
  }
}
