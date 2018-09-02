import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LocationsComponent } from './locations.component';

@NgModule({
  declarations: [
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    LocationsComponent
  ],
  providers: []
})

export class LocationsModule { }
