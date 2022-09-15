import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColumnsComponent } from './columns/columns.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatInputModule } from '@angular/material/input';
import { MatIconModule  } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { ItemsService } from './service/items.service';
import { NewIdeaComponent } from './new-idea/new-idea.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnsComponent,
    NewIdeaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
