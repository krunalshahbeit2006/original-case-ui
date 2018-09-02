import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FareComponent } from './fare.component';

@NgModule({
  declarations: [
    FareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FareComponent
  ],
  providers: []
})

export class LocationsModule { }
