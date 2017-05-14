import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { IphonComponent } from './iphon/iphon.component';
import { IphonItemComponent } from './iphon-item/iphon-item.component';

@NgModule({
  declarations: [
    AppComponent,


    IphonComponent,
    IphonItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
