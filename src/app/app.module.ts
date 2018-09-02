import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MessageService} from "./messages/message.service";
import {LocationsService} from "./locations/location.service";
import {FareService} from "./fare/fare.service";

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { LocationsComponent } from './locations/locations.component';
import { FareComponent } from './fare/fare.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    FareComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    AppComponent,
    LocationsComponent,
    FareComponent,
    MessagesComponent
  ],
  providers: [
    LocationsService,
    FareService,
    MessageService,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
