import { EventEmitter, Injectable } from '@angular/core';
import { Ideas, Store } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  Ideas = [
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

  store: Store = {
    allIdeas: [
    {
    development: [],
    testing: [],
    deployment: [],
    }
  ]
  }



  ideasUpdated = new EventEmitter<string>()

  constructor() {
    console.log(this.ideasUpdated);
    console.log(this.store);
  }


  addIdea(item: string){
    this.Ideas.push({item: item})
  }

  updateIdea(id: number, item: string){
    this.Ideas[id].item = item
  }

  moveIdea(){
    this.Ideas.push(this.store.allIdeas)
  }
}
