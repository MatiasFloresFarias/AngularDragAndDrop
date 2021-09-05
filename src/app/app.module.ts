import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    DragDropModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
