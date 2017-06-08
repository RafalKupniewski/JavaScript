import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { IphoneComponent } from './iphone/iphone.component';
import { IphoneDetailsComponent } from './iphone-details/iphone-details.component';
import { IphoneDeleteComponent } from './iphone-delete/iphone-delete.component';
import { IphoneSearchComponent } from './iphone-search/iphone-search.component';
import { IphoneEditComponent } from './iphone-edit/iphone-edit.component';
const routes: Routes = [
  // basic routes
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'dodaj', component: IphoneComponent },
  { path: 'usun', component: IphoneDeleteComponent },
  { path: 'szukaj', component: IphoneSearchComponent},
  { path: 'edytuj', component: IphoneEditComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    IphoneComponent,
    IphoneDetailsComponent,
    IphoneDeleteComponent,
    IphoneSearchComponent,
    IphoneEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
