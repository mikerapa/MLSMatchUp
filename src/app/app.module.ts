import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchSelectionComponent } from './matchselection/matchselection.component';
import { MatchDataService } from 'src/services/matchdataservice';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {AgGridModule} from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent, MatchSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, AgGridModule.withComponents([]),
  ],
  providers: [MatchDataService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
