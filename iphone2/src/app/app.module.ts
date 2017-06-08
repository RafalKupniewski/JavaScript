import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IphoneComponent } from './iphone/iphone.component';
import { IphoneDetailsComponent } from './iphone-details/iphone-details.component';

@NgModule({
  declarations: [
    AppComponent,
    IphoneComponent,
    IphoneDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
