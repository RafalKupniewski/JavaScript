import { Search } from './../serv/operation3';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {ReflectiveInjector} from '@angular/core';
import { hardware } from  './../app.component';
@Component({
  selector: 'app-iphone-search',
  templateUrl: './iphone-search.component.html',
  styleUrls: ['./iphone-search.component.css']
})
export class IphoneSearchComponent implements OnInit {
  search: FormControl;
  searches: Array<any>= [{ "return": ''}];
  searchIphone: Search;
  constructor() { 
    var injector: any = ReflectiveInjector.resolveAndCreate([Search]);
    this.searchIphone = injector.get(Search);
    this.search = new FormControl();
    this.search.valueChanges.subscribe(
     searchPhone => this.searches.push({return: this.searchIphone.ser(this.search, hardware)})
    );
  }

  ngOnInit() {
  }

}
