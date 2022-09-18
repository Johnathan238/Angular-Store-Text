import { Component, Input, OnInit } from '@angular/core';
import { ItemsService } from '../service/items.service';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent implements OnInit {
  @Input() ideas: { item: string }[] = []

  constructor(private theIdeas: ItemsService) {
    this.theIdeas.ideasUpdated.subscribe(
      (ideas: string) => alert('Moved to ' + ideas)
    )
  }
  ngOnInit(): void {
    this.ideas = this.theIdeas.ideas
    console.log(this.ideas);

  }

}
