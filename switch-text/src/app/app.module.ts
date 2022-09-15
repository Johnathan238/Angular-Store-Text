import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewItemComponent } from './new-item/new-item.component';
import { ColumnsComponent } from './columns/columns.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatInputModule } from '@angular/material/input';
import { MatIconModule  } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    ColumnsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
